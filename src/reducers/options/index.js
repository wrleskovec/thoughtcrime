import update from 'react/lib/update';
import BL from '../../blockList.js';
import notify from '~/helpers/notify.js';
import Dash from './Dash.js';
import Filtering from './Filtering.js';
import Settings from './Settings.js';
import Statistics from './Statistics';
import moment from 'moment';

function optionsReducer(state, action) {
  switch (action.type) {
    case 'FETCH_DAILY_SITES':
      return update(state, {
        dailySites: { $set: BL.fetchDailySites() }
      });
    case 'FETCH_PATTERNS':
      return update(state, {
        patterns: { $set: BL.patterns.items }
      });
    case 'SITE_FETCH_UNSUCCESSFUL':
      notify('Error: Unable to fetch sites from DB.');
      return state;
    case 'SITE_FETCH_SUCCESSFUL':
      return update(state, {
        sites: { $set: action.sites },
        Filtering: { searchedSites: { $set: action.sites } }
      });
    case 'NAVIGATE_OPTIONS':
      return update(state, {
        selectedPage: { $set: action.selectedPage },
        selectedCategory: { $set: action.selectedCategory },
        navOptions: { $set: action.options }
      });
    default:
      return state;
  }
}

const reducerFuncs = [
  optionsReducer,
  Dash,
  Filtering,
  Settings,
  Statistics
];

export default function rootReducer(state = {
  selectedPage: 'Dash',
  selectedCategory: 'Dash',
  navOptions: null,
  sites: [],
  dailySites: [],
  patterns: [],
  schedule: undefined,
  Filtering: {
    searchedSites: [],
    message: '',
    modalObj: null,
    sortBy: 'action',
    order: 'DESCENDING',
  },
  Statistics: {
    dailySiteRecords: [],
    startDate: moment(Date.now() - 7 * 24 * 3600 * 1000),
    endDate: moment(),
    searchResults: [],
    selectedSites: [],
    trendDatasets: []
  }
}, action) {
  let newState = state;
  for (let j = 0; j < reducerFuncs.length; j += 1) {
    newState = reducerFuncs[j](newState, action);
  }
  return newState;
}
