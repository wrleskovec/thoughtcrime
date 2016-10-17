import update from 'react/lib/update';
import BL from '../blockList.js';

export default function reducer(state = { sites: BL.fetchTodayStats(), message: '' }, action) {
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
        sites: { $set: action.sites }
      });
    default:
      return state;
  }
}
