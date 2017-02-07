import db from 'db.js';
import moment from 'moment';

let instance = null;
// I cache regexPatterns, dailyRecord for faster lookups
class BlockList {
  constructor() {
    if (!instance) {
      instance = this;
      this.idb = null;
      this.date = null;
      this.dailyRecord = null;
      this.patterns = undefined;
    }
    return instance;
  }

  init() {
    return db.open({
      server: 'ThoughtCrime',
      version: 2,
      schema: {
        sites: {
          key: {
            keyPath: 'site'
          },
          indexes: {
            action: {},
            visits: {},
            timeSpent: {},
            advAction: []
          }
        },
        settings: {
          key: {
            keyPath: 'config',
            autoIncrement: true
          },
          indexes: {
            setting: {},
            items: []
          },
        },
        dailyRecords: {
          key: {
            keyPath: 'day'
          },
          indexes: {
            sites: []
          }
        }
      }
    })
    .then(d => {
      this.idb = d;
      this.date = moment().format('DD-MM-YYYY');
      return this.getDayRecord(this.date)
        .then(day => {
          this.dailyRecord = day;
        })
        .catch(() => this.dayChange(this.date));
    })
    .then(() => (
      this.getRegexPatterns()
        .then(patterns => {
          if (patterns !== undefined) {
            this.patterns = patterns;
            return Promise.resolve();
          }
          return this.initRegexPatterns()
            .then(result => {
              this.patterns = result;
            });
        })
    ))
    .then(() => (
      this.getSchedule()
        .then(schedule => {
          this.schedule = schedule;
        })
        .catch(() => this.initNewSchedule())
    ));
  }
  initRegexPatterns() {
    return this.idb.settings.add({
      config: 'patterns',
      setting: { autoadd: false },
      items: []
    })
    .then(r => r[0]);
  }
  initSchedule() {
    return this.idb.settings.add({
      config: 'schedule'
    });
  }
  getRegexPatterns() {
    return this.idb.settings.get('patterns');
  }
  saveChangesRegex(items) {
    this.patterns.items = items;
    return this.idb.settings.update({
      config: 'patterns',
      items
    }).catch(e => Promise.reject(e));
  }
  getRecord(site) {
    return this.idb.sites.get(site)
      .then(result => {
        if (result === undefined) {
          if (site === 'youtube.com') alert('youtube bug');
          return Promise.reject(`${site}: Record not found`);
        }
        return Promise.resolve(result);
      });
  }
  deleteRecord(site) {
    return this.idb.sites.remove(site);
  }
  getDayRecord(day) {
    return this.idb.dailyRecords.get(day)
    .then(result => {
      if (result === undefined) return Promise.reject('Record not found');
      return Promise.resolve(result);
    });
  }
  addRegexPattern(regex, action) {
    const { items } = this.patterns;
    if (items.length === 0) {
      items.push({ id: 1, regex, action });
    } else {
      items.push({ id: items.length + 1, regex, action });
    }
    return this.idb.settings.update(this.patterns);
  }
  addSiteRecord(site) {
    return this.idb.sites.add({
      site,
      visits: 1,
      timeSpent: 0,
      action: 'accept',
      advAction: []
    })
    .then(r => r[0]);
  }
  addDayRecord(day) {
    return this.idb.dailyRecords.add({
      day,
      sites: []
    })
    .then(r => r[0]);
  }
  dayChange(day) {
    return this.addDayRecord(day)
      .then(record => {
        this.dailyRecord = record;
      })
      .then(() => this.getSchedule()
      // If schedule exists reset currentTime with stored limit. In process handled in Filter
        .then((schedule) => {
          schedule.setting.currentTime = schedule.setting.dailyLimit * 60000;
          return this.saveChangesSchedule(schedule);
        })
        .catch(() => this.initNewSchedule())
      );
  }
  addFilter(filter, acl, type) {
    if (type === 'Domain') return this.addSite(filter, acl);
    return this.addRegexPattern(filter, acl);
  }
  addSite(site, acl) {
    return this.getRecord(site)
      .then(result =>
        this.idb.sites.update({
          site,
          visits: result.visits,
          timeSpent: result.timeSpent,
          action: acl,
          advAction: result.advAction
        })
      )
      .catch(e => {
        if (e !== 'Record not found') throw e;
        return this.idb.sites.add({
          site,
          visits: 0,
          timeSpent: 0,
          action: acl,
          advAction: []
        });
      });
  }
  saveChangesModal(record) {
    return this.idb.sites.update(record)
      .catch(e => { throw e; });
  }
  saveChangesSchedule(schedule) {
    schedule.setting.currentTime = Math.floor(schedule.setting.currentTime);
    return this.idb.settings.update(schedule)
    .then(r => r[0]);
  }
  getSchedule() {
    return this.idb.settings.get('schedule')
      .then((result) => {
        if (result === undefined) {
          return Promise.reject();
        }
        return result;
      });
  }
  initNewSchedule() {
    return this.idb.settings.add({
      config: 'schedule',
      items: this.initDefaultSchedule(),
      setting: { dailyLimit: 120, currentTime: 7200000 }
    })
    .then(r => r[0]);
  }
  initDefaultSchedule() {
    const days = [];
    for (let i = 0; i < 7; i += 1) {
      const day = [];
      for (let j = 0; j < 96; j += 1) {
        day.push({ event: 'Default', color: [215, 12, 85] });
      }
      days.push(day);
    }
    return days;
  }
  // Timer DB Methods
  updateSiteRecord(record, timeSpent) {
    return this.idb.sites.update({
      site: record.site,
      visits: record.visits + 1,
      action: record.action,
      timeSpent: record.timeSpent + timeSpent
    });
  }
  reconcileRecords(site, seconds, visits) {
    const cacheIndex = this.dailyRecord.sites.findIndex(record => record.site === site);
    if (cacheIndex !== -1) {
      const siteRecord = this.dailyRecord.sites[cacheIndex];
      siteRecord.visits += visits;
      siteRecord.timeSpent += seconds;
    } else {
      this.dailyRecord.sites.push({
        site,
        visits: 1,
        timeSpent: seconds
      });
    }
    return this.idb.dailyRecords.update(this.dailyRecord)
      .then(() => this.getRecord(site)
        .then(record => this.idb.sites.update({
          site,
          visits: record.visits + 1,
          timeSpent: record.timeSpent + seconds,
          action: record.action,
          advAction: record.advAction
        }))
        .catch(() => this.addSiteRecord(site))
      );
  }
// consider renaming
  fetchSites() {
    return this.idb.sites.query()
      .all()
      .execute();
  }
  fetchDailySites() {
    return this.dailyRecord.sites;
  }

  fetchTrendData(startDate, endDate, selectedSites) {
    const dayQueries = [];
    const numOfDays = endDate.diff(startDate, 'days');
    for (let j = 0; j < numOfDays; j += 1) {
      dayQueries.push(
        this.idb.dailyRecords.get(startDate.add(j, 'days').format('DD-MM-YYYY'))
      );
    }
    return Promise.all(dayQueries).then(dayResults => {
      const filteredDays = dayResults.filter(result => result !== undefined);
      return filteredDays.map(day => ({
        day: day.day,
        sites: day.sites.filter(site => selectedSites.indexOf(site.site) > -1)
      }));
    });
  }

}

export default new BlockList();
