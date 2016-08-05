import { connect } from 'react-redux';
import Root from './components/Root.jsx';
import { addPattern } from './actions.js';

export const OptionsApp = connect(
  state => (
    { patterns: state.block }
  ),
  dispatch => (
    {
      addPattern: pattern => dispatch(addPattern(pattern))
    }
  )
)(Root);
