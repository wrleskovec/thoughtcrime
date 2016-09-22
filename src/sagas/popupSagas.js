import { fork } from 'redux-saga/effects';
import { addSiteSaga } from './sagasDB.js';

export default function* popupSagas() {
  yield fork(addSiteSaga);
}
