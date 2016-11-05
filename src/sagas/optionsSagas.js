import { fork } from 'redux-saga/effects';
import { fetchSitesSaga, addSiteSaga } from './sagasDB.js';

export default function* optionsSaga() {
  yield fork(fetchSitesSaga);
  console.log('hi');
  yield fork(addSiteSaga);
  console.log('hi again');
}
