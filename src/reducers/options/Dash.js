import update from 'react/lib/update';
import BL from '../../blockList.js';

function Dash(state = {
  dailySites: [],
  message: {}
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
    case 'FETCH_DAILY_SITES':
      return update(state, {
        dailySites: { $set: BL.fetchDailySites() }
      });
    default:
      return state;
  }
}

export default Dash;
