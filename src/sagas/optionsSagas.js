import { fork, call, put, select } from 'redux-saga/effects';
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

function* fetchDailySiteRecords() {
  const dailySiteRecords = [];
  try {
    const dailySites = yield select(state => state.dailySites);
    console.log(`dailySites: ${dailySites}`);
    for (const dailySite of dailySites) {
      const siteRecord = yield call([BL, BL.getRecord], dailySite.site);
      dailySiteRecords.push({
        site: siteRecord.site,
        timeSpent: dailySite.timeSpent,
        visits: dailySite.visits,
        action: siteRecord.action,
        advAction: siteRecord.advAction
      });
    }
    yield put({ type: 'FETCH_DAILY_SITE_RECORDS_SUCCESS', dailySiteRecords });
  } catch (e) {
    console.log(e);
  }
}
function* fetchModalRecordSaga() {
  yield takeLatest('FETCH_MODAL_RECORD', fetchModalRecord);
}
function* fetchDailySiteRecordsSaga() {
  yield takeLatest('FETCH_DAILY_SITE_RECORDS', fetchDailySiteRecords);
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
  yield fork(fetchDailySiteRecordsSaga);
}
