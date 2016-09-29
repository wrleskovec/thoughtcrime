import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
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
  try {
    const sites = yield call(BL.fetchSites);
    yield put({ type: 'SITE_FETCH_SUCCESSFUL', sites });
  } catch (e) {
    yield put({ type: 'SITE_FETCH_UNSUCCESSFUL', e });
  }
}
export function* addSiteSaga() {
  yield* takeEvery('ADD_SITE', addSite);
}

export function* fetchSitesSaga() {
  console.log('weird right?');
  yield* takeEvery('SITE_FETCH_REQUESTED', fetchSites);
  console.log('mega weird');
}
