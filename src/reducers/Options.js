import update from 'react/lib/update';
import BL from '../blockList.js';
import Fuse from 'fuse.js';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.1,
  location: 0,
  distance: 1000,
  maxPatternLength: 32,
  keys: ['site']
};

function reducer(state = {
  dailySites: BL.fetchTodayStats(),
  sites: [],
  sortedSites: [],
  message: '',
  modalID: null
}, action) {
  switch (action.type) {
    case 'ADD_SITE_SUCCEEDED':
      return update(state, {
        message: { $set: action.message }
      });
    case 'ADD_SITE_FAILED':
      return update(state, {
        message: { $set: action.e }
      });
    case 'SITE_FETCH_UNSUCCESSFUL':
      return update(state, {
        message: { $set: action.e }
      });
    case 'SITE_FETCH_SUCCESSFUL':
      return update(state, {
        sites: { $set: action.sites },
        sortedSites: { $set: action.sites }
      });
    case 'SITE_SORT': {
      const fuse = new Fuse(state.sites, fuseOptions);
      const results = fuse.search(action.filter);
      return update(state, {
        sortedSites: { $set: results }
      });
    }

    case 'OPEN_MODAL':
      return update(state, {
        modalID: { $set: action.modalID }
      });
    default:
      return state;
  }
}

export default reducer;
