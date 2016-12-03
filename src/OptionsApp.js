import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/options/index';
import OptionsApp from './containers/Options.js';
import optionsSagas from './sagas/optionsSagas.js';
import 'bootstrap/dist/css/bootstrap.css';
import './css/options.styl';
import 'jquery/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';
import BL from './blockList.js';
import { fetchDailySites, fetchPatterns } from './actions/options';

BL.init().then(() => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(optionsSagas);
  store.dispatch(fetchDailySites());
  store.dispatch(fetchPatterns());
  console.log(store.getState());
  render(
    <Provider store={store}>
      <OptionsApp />
    </Provider>,
    document.getElementById('OptionsApp')
  );
});
