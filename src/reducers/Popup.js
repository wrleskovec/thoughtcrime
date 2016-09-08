import update from 'react/lib/update';

export default function reducer(state = { block: [] }, action) {
  switch (action.type) {
    case 'ADD_PATTERN':
      return update(state, {
        block: { $push: [action.pattern] }
      });
    default:
      return state;
  }
}
