import { fork } from 'redux-saga/effects';
import { fetchSitesSaga, addSiteSaga, deleteSiteSaga, saveChangesModalSaga } from './sagasDB.js';

export default function* optionsSaga() {
  yield fork(fetchSitesSaga);
  yield fork(addSiteSaga);
  yield fork(deleteSiteSaga);
  yield fork(saveChangesModalSaga);
}
