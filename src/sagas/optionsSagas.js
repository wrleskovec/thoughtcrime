import { fork } from 'redux-saga/effects';
import * as sagas from './sagasDB.js';

export default function* optionsSaga() {
  yield fork(sagas.fetchSitesSaga);
  console.log('hi');
  yield fork(sagas.addSiteSaga);
  console.log('hi again');
}
