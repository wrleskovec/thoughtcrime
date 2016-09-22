import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/Popup.js';
import PopupApp from './containers/Popup.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <PopupApp />
  </Provider>,
  document.getElementById('PopupApp')
);
