import BL from './blockList.js';
import Filter from './Filter.js';


BL.init().then(() => {
  BL.idb.dailyRecords.remove('11-01-2017')
    .then(() => Filter.init());
});
