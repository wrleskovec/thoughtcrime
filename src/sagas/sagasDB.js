import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import BL from '../blockList.js';

function* addSite(action) {
  console.log('WHYYYYYY');
  try {
    const message = yield call([BL, BL.addSite], action.site);
    yield put({ type: 'ADD_SITE_SUCCEEDED', message });
  } catch (e) {
    console.log(e);
    yield put({ type: 'ADD_SITE_FAILED', e });
  }
}
function* fetchSites() {
  console.log('Hmmmmmm');
  console.log(BL.idb);
  try {
    const sites = yield call([BL, BL.fetchSites]);
    console.log(sites);
    yield put({ type: 'SITE_FETCH_SUCCESSFUL', sites });
    console.log('woo?');
  } catch (e) {
    console.log(e);
    yield put({ type: 'SITE_FETCH_UNSUCCESSFUL', e });
  }
}
export function* addSiteSaga() {
  yield* takeLatest('ADD_SITE', addSite);
}

export function* fetchSitesSaga() {
  yield* takeLatest('SITE_FETCH_REQUESTED', fetchSites);
}
