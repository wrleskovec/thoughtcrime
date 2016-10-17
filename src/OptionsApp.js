import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/Options.js';
import OptionsApp from './containers/Options.js';
import optionsSagas from './sagas/optionsSagas.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import BL from './blockList.js';


BL.init().then(() => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(optionsSagas);
  render(
    <Provider store={store}>
      <OptionsApp />
    </Provider>,
    document.getElementById('OptionsApp')
  );
});
