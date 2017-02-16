import update from 'react/lib/update';
function Settings(state, action) {
  switch (action.type) {
    case 'SAVE_CHANGES_SCHEDULE_SUCCESSFUL':
      return update(state, {
        schedule: { $set: action.schedule }
      });
    case 'FETCH_SCHEDULE_SUCCESSFUL':
      return update(state, {
        schedule: { $set: action.schedule }
      });
    case 'SET_BLOCKED_URL_SUCCESSFUL':
      return update(state, {
        blockedUrl: { $set: action.url }
      });
    case 'GET_BLOCKED_URL_SUCCESSFUL':
      return update(state, {
        blockedUrl: { $set: action.url }
      });
    default:
      return state;
  }
}

export default Settings;
