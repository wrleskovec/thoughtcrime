import db from 'db.js';

export default class BlockList {
  constructor() {
    this.idb = {};
    this.currentPromise = undefined;
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
            siteVisits: {}
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
      });
  }
  getRecord(site) {
    return this.idb.sites.get(site)
      .then(result => {
        if (result === undefined) return Promise.reject('Record not found');
        return Promise.resolve(result);
      });
  }
  addSite(site) {
    return this.getRecord(site)
      .then(result => {
        const visits = result.visits || 0;
        const timeSpent = result.timeSpent || 0;
        const advAction = result.advAction || {};
        return this.idb.sites.update({
          site,
          visits,
          timeSpent,
          action: 'block',
          advAction
        });
      })
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
  incrementVisit(record) {
    return this.idb.sites.update({
      site: record.site,
      visits: record.visits + 1,
      action: record.action
    })
      .then(r => r[0]);
  }
  checkSite(site) {
    return this.getRecord(site)
      .then(record => {
        if (record.action !== 'block') {
          return this.incrementVisit(record);
        }
        return record;
      })
      .catch(err => {
        console.log(err);
        return this.idb.sites.add({
          site,
          visits: 1,
          timeSpent: 0,
          action: 'accept',
          advAction: {}
        });
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
