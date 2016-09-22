import update from 'react/lib/update';

export default function reducer(state = { sites: [], message: '' }, action) {
  switch (action.type) {
    case 'ADD_SITE_SUCCEEDED':
      return update(state, {
        message: { $set: action.message }
      });
    case 'ADD_SITE_FAILED':
      return update(state, {
        message: { $set: action.e }
      });
    default:
      return state;
  }
}
