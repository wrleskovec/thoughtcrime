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

function Filtering(state, action) {
  console.log('Filtering Reducer Runs');
  switch (action.type) {
    case 'SITE_SEARCH': {
      if (action.filter === '') {
        return update(state, {
          Filtering: { searchedSites: { $set: state.sites } }
        });
      }
      const fuse = new Fuse(state.sites, fuseOptions);
      const results = fuse.search(action.filter);
      return update(state, {
        Filtering: { searchedSites: { $set: results } }
      });
    }
    case 'SITE_SORT': {
      if (action.sortBy === state.Filtering.sortBy) {
        const order = (state.Filtering.order === 'DESCENDING') ? 'ASCENDING' : 'DESCENDING';
        return update(state, {
          Filtering: { order: { $set: order } }
        });
      }
      return update(state, {
        Filtering: { sortBy: { $set: action.sortBy } }
      });
    }
    case 'OPEN_MODAL':
      return update(state, {
        Filtering: { modalObj: { $set: action.modalObj } }
      });
    case 'SITE_DELETE_SUCCESSFUL': {
      notify('Record deletion successful');
      const sitesIndex = state.sites.findIndex(site => site.site === action.site);
      const searchedIndex = state.Filtering.searchedSites.findIndex(site =>
        site.site === action.site);
      return update(state, {
        sites: { $splice: [[sitesIndex, 1]] },
        Filtering: { searchedSites: { $splice: [[searchedIndex, 1]] } }
      });
    }
    case 'SAVE_CHANGES_MODAL_SUCCESSFUL': {
      notify('Record changes saved');
      const sitesIndex = state.sites.findIndex(site => site.site === action.site.site);
      const searchedIndex = state.Filtering.searchedSites.findIndex(site =>
        site.site === action.site.site);
      const newSites = update(state.sites, { [sitesIndex]: { $set: action.site } });
      const newSearchedSites = update(state.Filtering.searchedSites, {
        [searchedIndex]: { $set: action.site }
      });
      return {
        ...state,
        Filtering: {
          ...state.Filtering,
          sites: newSites,
          searchedSites: newSearchedSites
        }
      };
    }
    case 'SAVE_CHANGES_REGEX_SUCCESSFUL': {
      notify('Pattern changes saved');
      return update(state, {
        patterns: { $set: action.items }
      });
    }
    default:
      return state;
  }
}

export default Filtering;
