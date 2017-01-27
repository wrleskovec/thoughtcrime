import { fork, call, put } from 'redux-saga/effects';
import BL from '~/blockList';
import { openModal } from '~/actions/options';
import { takeLatest } from 'redux-saga';
import { fetchSitesSaga, addFilterSaga, deleteSiteSaga,
saveChangesModalSaga, saveChangesRegexSaga, fetchScheduleSaga,
saveChangesScheduleSaga } from './sagasDB.js';


function* fetchModalRecord(action) {
  try {
    const record = yield call([BL, BL.getRecord], action.site);
    yield put(openModal(record));
  } catch (e) {
    console.log('This should not be happening and too lazy to add in edge case');
  }
}
function* fetchModalRecordSaga() {
  yield takeLatest('FETCH_MODAL_RECORD', fetchModalRecord);
}
export default function* optionsSaga() {
  yield fork(fetchSitesSaga);
  yield fork(addFilterSaga);
  yield fork(deleteSiteSaga);
  yield fork(saveChangesModalSaga);
  yield fork(saveChangesRegexSaga);
  yield fork(saveChangesScheduleSaga);
  yield fork(fetchScheduleSaga);
  yield fork(fetchModalRecordSaga);
}
