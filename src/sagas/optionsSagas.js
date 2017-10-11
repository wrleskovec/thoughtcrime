import { fork, call, put, select } from 'redux-saga/effects';
import BL from '~/blockList';
import { openModal } from '~/actions/options';
import { takeEvery } from 'redux-saga';
import notify from '~/helpers/notify';
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
    const trendDatasets = yield call([BL, BL.fetchTrendData], startDate, endDate, selectedSites);
    yield put({ type: 'FETCH_TREND_DATA_SUCCESSFUL', trendDatasets });
  } catch (e) {
    console.log(e);
  }
}
function* getBlockedUrl() {
  try {
    const config = yield call([BL, BL.getBlockedUrl]);
    yield put({ type: 'GET_BLOCKED_URL_SUCCESSFUL', url: config.setting.url });
  } catch (e) {
    console.log(e);
  }
}
function* setBlockedUrl(action) {
  yield call([BL, BL.setBlockedUrl], action.url);
  yield put({ type: 'SET_BLOCKED_URL_SUCCESSFUL', url: action.url });
}
function* importDatabase(action) {
  try {
    yield call([BL, BL.importDatabase], action.db);
    yield put({ type: 'GET_BLOCKED_URL' });
    notify('Database successfully imported');
  } catch (e) {
    notify(e);
  }
}
function* checkDomainPreset() {
  try {
    const { setting } = yield call([BL, BL.getDomainSetting]);
    if (setting.domain !== '') {
      console.log(setting.domain);
      yield put({ type: 'FETCH_MODAL_RECORD', site: setting.domain });
    }
  } catch (e) {
    console.log(e);
  }
}
function* getBlockedUrlSaga() {
  yield takeEvery('GET_BLOCKED_URL', getBlockedUrl);
}
function* setBlockedUrlSaga() {
  yield takeEvery('SET_BLOCKED_URL', setBlockedUrl);
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
function* importDatabaseSaga() {
  yield takeEvery('IMPORT_DATABASE', importDatabase);
}
function* checkDomainPresetSaga() {
  yield takeEvery('CHECK_DOMAIN_PRESET', checkDomainPreset);
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
  yield fork(getBlockedUrlSaga);
  yield fork(setBlockedUrlSaga);
  yield fork(importDatabaseSaga);
  yield fork(checkDomainPresetSaga);
}
