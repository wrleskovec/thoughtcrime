import { combineReducers } from 'redux';
import Dash from './Dash.js';
import Filtering from './Filtering.js';
import Settings from './Settings.js';

export default combineReducers({
  Dash,
  Filtering,
  Settings
});
