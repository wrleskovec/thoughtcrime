import notify from '~/helpers/notify';

function Dash(state, action) {
  switch (action.type) {
    case 'ADD_SITE_SUCCEEDED':
      notify('Successfully added site');
      return state;
    case 'ADD_SITE_FAILED':
      notify('Unable to add site');
      return state;
    default:
      return state;
  }
}

export default Dash;
