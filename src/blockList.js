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
    }
    return instance;
  }

  init() {
    return db.open({
      server: 'ThoughtCrime',
      version: 1,
      schema: {
        sites: {
          key: {
            keyPath: 'site'
          },
          indexes: {
            action: {},
            visits: {},
            timeSpent: {},
            advAction: {}
          }
        },
        patterns: {
          key: {
            keyPath: 'id',
            autoIncrement: true
          },
          indexes: {
            regex: {},
            filter: {}
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
          console.log('Maybe?');
          this.dailyRecord = day;
        })
        .catch(() => this.addDayRecord(this.date)
          .then(record => {
            console.log(record);
            this.dailyRecord = record;
          })
        );
    });
  }

  getRecord(site) {
    return this.idb.sites.get(site)
      .then(result => {
        if (result === undefined) return Promise.reject('Record not found');
        return Promise.resolve(result);
      });
  }
  getDayRecord(day) {
    return this.idb.dailyRecords.get(day)
    .then(result => {
      if (result === undefined) return Promise.reject('Record not found');
      return Promise.resolve(result);
    });
  }
  addSiteRecord(site) {
    console.log(site);
    return this.idb.sites.update({
      site,
      visits: 1,
      timeSpent: 0,
      action: 'accept',
      advAction: {}
    });
  }
  addDayRecord(day) {
    return this.idb.dailyRecords.add({
      day,
      sites: []
    })
    .then(r => r[0]);
  }
  addSite(site) {
    return this.getRecord(site)
      .then(result =>
        this.idb.sites.update({
          site,
          visits: result.visits,
          timeSpent: result.timeSpent,
          action: 'block',
          advAction: result.advAction
        })
      )
      .catch(e => {
        if (e !== 'Record not found') throw e;
        return this.idb.sites.add({
          site,
          visits: 0,
          timeSpent: 0,
          action: 'block',
          advAction: {}
        });
      });
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
      .execute()
      .then(sites => {
        console.log(sites);
        return sites;
      });
  }
  fetchTodayStats() {
    console.log(this.dailyRecord.sites);
    return this.dailyRecord.sites.map(record => ({
      site: record.site,
      timeSpent: (
        moment('2015-01-01').startOf('day')
        .seconds(record.timeSpent)
        .format('H:mm:ss')),
      visits: record.visits
    }));
  }

}

export default new BlockList();
