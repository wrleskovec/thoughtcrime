import { call, put } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga';
import BL from '../blockList.js';

function* addFilter(action) {
  try {
    console.log('OMG OMG OGM');
    const message = yield call([BL, BL.addFilter], action.filter, action.action, action.filterType);
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
    yield call([BL, BL.deleteRecord], action.site);
    yield put({ type: 'SITE_DELETE_SUCCESSFUL', site: action.site });
  } catch (e) {
    yield put({ type: 'SITE_DELETE_UNSUCCESSFUL', e });
  }
}
function* saveChangesModal(action) {
  try {
    yield call([BL, BL.saveChangesModal], action.site);
    yield put({ type: 'SAVE_CHANGES_MODAL_SUCCESSFUL', site: action.site });
  } catch (e) {
    yield put({ type: 'SAVE_CHANGES_MODAL_UNSUCCESSFUL', e });
  }
}
export function* addFilterSaga() {
  yield* takeLatest('ADD_FILTER', addFilter);
}

export function* fetchSitesSaga() {
  yield* takeEvery('SITE_FETCH', fetchSites);
}

export function* deleteSiteSaga() {
  yield* takeEvery('SITE_DELETE', deleteSite);
}
export function* saveChangesModalSaga() {
  yield* takeEvery('SAVE_CHANGES_MODAL', saveChangesModal);
}
