import update from 'react/lib/update';
import BL from '../blockList.js';

function reducer(state = {
  dailySites: BL.fetchTodayStats(),
  sites: [],
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
        sites: { $set: action.sites }
      });
    case 'OPEN_MODAL':
      return update(state, {
        modalID: { $set: action.modalID }
      });
    default:
      return state;
  }
}

export default reducer;
