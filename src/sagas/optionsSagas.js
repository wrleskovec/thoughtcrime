import { fork, call, put, select } from 'redux-saga/effects';
import BL from '~/blockList';
import { openModal } from '~/actions/options';
import { takeEvery } from 'redux-saga';
import { fetchSitesSaga, addFilterSaga, deleteSiteSaga,
saveChangesModalSaga, saveChangesRegexSaga, fetchScheduleSaga,
saveChangesScheduleSaga } from './sagasDB.js';


function* fetchModalRecord(action) {
  try {
    const record = yield call([BL, BL.getRecord], action.site);
    yield put(openModal(record));
  } catch (e) {
    console.log(e);
  }
}

function* fetchDailySiteRecords() {
  const dailySiteRecords = [];
  try {
    const dailySites = yield select(state => state.dailySites);
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
function* fetchTrendData() {
  try {
    const { startDate, endDate, selectedSites } = yield select(state => state.Statistics);
    console.log(`selectedSites in saga: ${selectedSites}`);
    const trendDatasets = yield BL.fetchTrendData(startDate, endDate, selectedSites);
    yield put({ type: 'FETCH_TREND_DATA_SUCCESSFUL', trendDatasets });
  } catch (e) {
    console.log(e);
  }
}
function* fetchModalRecordSaga() {
  yield takeEvery('FETCH_MODAL_RECORD', fetchModalRecord);
}
function* fetchDailySiteRecordsSaga() {
  yield takeEvery('FETCH_DAILY_SITE_RECORDS', fetchDailySiteRecords);
}
function* fetchTrendDataSaga() {
  yield takeEvery('FETCH_TREND_DATA', fetchTrendData);
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
  yield fork(fetchTrendDataSaga);
}
