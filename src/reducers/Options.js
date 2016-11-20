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
  dailySites: BL.fetchDailySites(),
  sites: [],
  searchedSites: [],
  message: '',
  modalObj: null,
  sortBy: 'action',
  order: 'DESCENDING'
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
        searchedSites: { $set: action.sites }
      });
    case 'SITE_SEARCH': {
      if (action.filter === '') {
        return update(state, {
          searchedSites: { $set: state.sites }
        });
      }
      const fuse = new Fuse(state.sites, fuseOptions);
      const results = fuse.search(action.filter);
      return update(state, {
        searchedSites: { $set: results }
      });
    }
    case 'OPEN_MODAL':
      return update(state, {
        modalObj: { $set: action.modalObj }
      });
    default:
      return state;
  }
}

export default reducer;
