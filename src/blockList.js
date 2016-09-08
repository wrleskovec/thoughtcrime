import db from 'db.js';

export default class BlockList {
  constructor() {
    this.idb = {};
  }
  open() {
    return db.open({
      server: 'dumbblock',
      version: 1,
      schema: {
        blocklist: {
          key: {
            keyPath: 'domain'
          },
          indexes: {
            action: {},
            visits: {}
          }
        }
      }
    })
      .then(d => {
        this.idb = d;
      });
  }
  getRecord(domain) {
    return this.idb.blocklist.get(domain)
      .then(result => {
        if (result === undefined) return Promise.reject('Record not found');
        return Promise.resolve(result);
      });
  }
  addDomain(domain) {
    return this.getRecord(domain)
      .then(result => {
        const visits = result.visits || 0;
        return this.idb.blocklist.update({
          domain,
          visits,
          action: 'block'
        });
      });
  }
  incrementVisit(record) {
    return this.idb.blocklist.update({
      domain: record.domain,
      visits: record.visits + 1,
      action: record.action
    })
      .then(r => r[0]);
  }
  checkDomain(domain) {
    return this.getRecord(domain)
      .then(record => {
        if (record.action !== 'block') {
          return this.incrementVisit(record);
        }
        return record;
      })
      .catch(err => {
        console.log(err);
        return this.idb.blocklist.add({
          domain,
          visits: 1,
          action: 'accept'
        });
      });
  }
}
