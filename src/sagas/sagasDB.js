import { call, put } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import BL from '../blockList.js';

function* addSite(action) {
  try {
    const message = yield call([BL, BL.addSite], action.site);
    yield put({ type: 'ADD_SITE_SUCCEEDED', message });
  } catch (e) {
    yield put({ type: 'ADD_SITE_FAILED', e });
  }
}
function* fetchSites() {
  try {
    const sites = yield call([BL, BL.fetchSites]);

    yield put({ type: 'SITE_FETCH_SUCCESSFUL', sites });
  } catch (e) {
    yield put({ type: 'SITE_FETCH_UNSUCCESSFUL', e });
  }
}
function* deleteSite(action) {
  try {
    const deleted = yield call([BL, BL.deleteRecord], action.site);
    yield put({ type: 'SITE_DELETE_SUCCESSFUL', deleted });
  } catch (e) {
    yield put({ type: 'SITE_DELETE_UNSUCCESSFUL', e });
  }
}
export function* addSiteSaga() {
  yield* takeLatest('ADD_SITE', addSite);
}

export function* fetchSitesSaga() {
  yield* takeEvery('SITE_FETCH', fetchSites);
}

export function* deleteSiteSaga() {
  yield* takeEvery('SITE_DELETE', deleteSite);
}
