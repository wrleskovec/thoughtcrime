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
            application: {}
          },
        },
        dailyRecords: {
          key: {
            keyPath: 'day'
          },
          indexes: {
            visits: {},
            timeSpent: {}
          }
        }
      }
    })
      .then(d => {
        this.idb = d;
      });
  }
  open() {
    return db.open({
      server: 'ThoughtCrime',
      version: 1
    })
      .then(d => {
        this.idb = d;
        return this.fetchDaily(this.date)
          .then(day => {
            if (!day) {
              return this.addDayRecord(this.date)
                .then(record => {
                  this.dailyRecord = record;
                });
            }
            this.dailyRecord = day;
            return day;
          });
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
    return this.idb.sites.add({
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
      visits: {},
      timeSpent: {}
    });
  }
  updateDailyRecord() {
    return this.idb.dailyRecords.update({
      day: this.date,
      visits: this.dailyRecord.visits,
      timeSpent: this.dailyRecord.timeSpent
    });
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
  // WebRequest Check
  checkSite(site) {
    return this.getRecord(site)
      .then(record => record)
      .catch(err => {
        console.log(err);
        return this.addSiteRecord(site);
      });
  }
  // Timer DB Methods
  fetchDaily(date) {
    return this.idb.dailyRecords.get(date);
  }
  incrementSiteVisit(record) {
    return this.idb.sites.update({
      site: record.site,
      visits: record.visits + 1,
      action: record.action
    })
      .then(r => r[0]);
  }
  incrementVisit(site) {
    return this.getRecord(site)
      .then(record => this.incrementSiteVisit(record))
      .then(() => {
        this.dailyRecord.visits[site] += 1;
        // NEED TO DO updateDailyRecord combined with reconciling timeSpent
        return this.updateDailyRecord();
      });
  }

  fetchSites() {
    return this.idb.sites.query()
      .all()
      .execute()
      .then(sites => {
        console.log(sites);
        return sites;
      });
  }

}

export default new BlockList();
