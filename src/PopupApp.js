import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from './PopupApp/reducer.js';
import { PopupApp } from './PopupApp/container.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

const store = createStore(reducer, undefined, autoRehydrate());
persistStore(store);

render(
  <Provider store={store}>
    <PopupApp />
  </Provider>,
  document.getElementById('PopupApp')
);
