import db from 'db.js';
import moment from 'moment';

let instance = null;

class BlockList {
  constructor() {
    if (!instance) {
      instance = this;
      this.idb = null;
      this.date = moment().format('DD-MM-YYYY');
      this.dailyRecord = null;
      this.patterns = null;
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
      return this.getDayRecord(this.date)
        .then(day => {
          this.dailyRecord = day;
        })
        .catch(() => this.addDayRecord(this.date)
          .then(record => {
            this.dailyRecord = record;
          })
        );
    })
    .then(() => (
      this.getRegexPatterns()
        .then(patterns => {
          console.log(patterns);
          this.patterns = patterns;
        })
        .catch(() => this.initRegexPatterns()
          .then(patterns => {
            console.log(patterns);
            this.patterns = patterns;
          }))
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
  getRegexPatterns() {
    return this.idb.settings.get('patterns')
      .then(result => {
        if (result === undefined) return Promise.reject('Record not found');
        return Promise.resolve(result);
      });
  }
  getRecord(site) {
    return this.idb.sites.get(site)
      .then(result => {
        if (result === undefined) return Promise.reject('Record not found');
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
    console.log(site);
    return this.idb.sites.update({
      site,
      visits: 1,
      timeSpent: 0,
      action: 'accept',
      advAction: []
    });
  }
  addDayRecord(day) {
    return this.idb.dailyRecords.add({
      day,
      sites: []
    })
    .then(r => r[0]);
  }
  addFilter(filter, acl, type) {
    console.log('YES. EXCELLENT');
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
    console.log(cacheIndex);
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
      .then(() => this.getRecord(site))
      .then(record => this.idb.sites.update({
        site,
        visits: record.visits + 1,
        timeSpent: record.timeSpent + seconds,
        action: record.action,
        advAction: record.advAction
      }))
      .catch(() => this.addSiteRecord(site));
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

}

export default new BlockList();
