import update from 'react/lib/update';

function Statistics(state, action) {
  switch (action.type) {
    case 'FETCH_DAILY_SITE_RECORDS_SUCCESS': {
      return update(state, {
        Statistics: { dailySiteRecords: { $set: action.dailySiteRecords } }
      });
    }
    default:
      return state;
  }
}

export default Statistics;
