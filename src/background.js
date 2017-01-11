import BL from './blockList.js';
import Filter from './Filter.js';


BL.init().then(() => {
  Filter.init();
});
