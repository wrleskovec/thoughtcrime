import update from 'react/lib/update';
import searchSites from '~/helpers/searchSites';

function Statistics(state, action) {
  switch (action.type) {
    case 'FETCH_DAILY_SITE_RECORDS_SUCCESS': {
      return update(state, {
        Statistics: { dailySiteRecords: { $set: action.dailySiteRecords } }
      });
    }
    case 'UPDATE_SELECTED_SITES':
      return update(state, {
        Statistics: { selectedSites: { $set: action.newSites } }
      });
    case 'SET_END_DATE':
      return update(state, {
        Statistics: { endDate: { $set: action.date } }
      });
    case 'SET_START_DATE': {
      console.log(action.date);
      return update(state, {
        Statistics: { startDate: { $set: action.date } }
      });
    }
    case 'STATISTICS_SEARCH_RECORDS': {
      const { selectedSites } = state.Statistics;
      const results = searchSites(state.sites, action.filter);
      const length = results.length > 5 ? 5 : results.length;
      const filteredResults = results.filter(record => {
        // make sure searched sites are not duplicates of what is already selected
        for (let j = 0; j < selectedSites.length; j += 1) {
          if (selectedSites[j] === record.site) {
            return false;
          }
        }
        return true;
      });
      const truncatedResults = filteredResults.slice(0, length).map(result => result.site);
      return update(state, {
        Statistics: { searchResults: { $set: truncatedResults } }
      });
    }
    case 'FETCH_TREND_DATA_SUCCESSFUL':
      return update(state, {
        Statistics: { trendDatasets: { $set: action.trendDatasets } }
      });
    default:
      return state;
  }
}

export default Statistics;
