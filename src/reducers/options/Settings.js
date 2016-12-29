import update from 'react/lib/update';
function Settings(state = {
  schedule: undefined,
}, action) {
  switch (action.type) {
    case 'SAVE_CHANGES_SCHEDULE_SUCCESSFUL':
      return update(state, {
        schedule: { $set: action.schedule }
      });
    case 'FETCH_SCHEDULE_SUCCESSFUL':
      return update(state, {
        schedule: { $set: action.schedule }
      });
    default:
      return state;
  }
}

export default Settings;
