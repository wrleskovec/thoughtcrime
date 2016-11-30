import update from 'react/lib/update';
import Fuse from 'fuse.js';
import { notify } from '../../helpers.js';

const fuseOptions = {
  shouldSort: true,
  threshold: 0.1,
  location: 0,
  distance: 1000,
  maxPatternLength: 32,
  keys: ['site']
};

function Filtering(state = {
  sites: [],
  searchedSites: [],
  message: '',
  modalObj: null,
  sortBy: 'action',
  order: 'DESCENDING'
}, action) {
  switch (action.type) {
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
    case 'SITE_SORT': {
      if (action.sortBy === state.sortBy) {
        const order = (state.order === 'DESCENDING') ? 'ASCENDING' : 'DESCENDING';
        return update(state, {
          order: { $set: order }
        });
      }
      return update(state, {
        sortBy: { $set: action.sortBy }
      });
    }
    case 'OPEN_MODAL':
      return update(state, {
        modalObj: { $set: action.modalObj }
      });
    case 'SITE_DELETE_SUCCESSFUL': {
      notify('Record deletion successful');
      const sitesIndex = state.sites.findIndex(site => site.site === action.site);
      const searchedIndex = state.searchedSites.findIndex(site => site.site === action.site);
      return update(state, {
        sites: { $splice: [[sitesIndex, 1]] },
        searchedSites: { $splice: [[searchedIndex, 1]] }
      });
    }
    case 'SAVE_CHANGES_MODAL_SUCCESSFUL': {
      notify('Record changes saved');
      const sitesIndex = state.sites.findIndex(site => site.site === action.site.site);
      const searchedIndex = state.searchedSites.findIndex(site => site.site === action.site.site);
      return update(state, {
        sites: { [sitesIndex]: { $set: action.site } },
        searchedSites: { [searchedIndex]: { $set: action.site } }
      });
    }
    default:
      return state;
  }
}

export default Filtering;
