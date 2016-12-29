import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/Popup.js';
import PopupApp from './containers/Popup.js';
import popupSagas from './sagas/popupSagas.js';
import 'bootstrap/dist/css/bootstrap.css';
import '~/css/common.styl';
// import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import BL from './blockList.js';
BL.init();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(popupSagas);


render(
  <Provider store={store}>
    <PopupApp />
  </Provider>,
  document.getElementById('PopupApp')
);
