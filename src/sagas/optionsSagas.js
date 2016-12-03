import { fork } from 'redux-saga/effects';
import { fetchSitesSaga, addFilterSaga, deleteSiteSaga,
saveChangesModalSaga, saveChangesRegexSaga } from './sagasDB.js';

export default function* optionsSaga() {
  yield fork(fetchSitesSaga);
  yield fork(addFilterSaga);
  yield fork(deleteSiteSaga);
  yield fork(saveChangesModalSaga);
  yield fork(saveChangesRegexSaga);
}
