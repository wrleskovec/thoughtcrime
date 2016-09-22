import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import BlockList from '../blockList.js';

function* addSite(action) {
  try {
    console.log('something happened');
    const BL = new BlockList();
    yield call([BL, BL.open]);
    console.log('it got this far yay!');
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
    const BL = new BlockList();
    yield call([BL, BL.open]);
    const sites = yield call([BL, BL.fetchSites]);
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
