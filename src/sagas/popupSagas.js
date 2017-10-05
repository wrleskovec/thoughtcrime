import { fork, put, call } from 'redux-saga/effects';
import { addFilterSaga } from './sagasDB.js';
import { takeLatest } from 'redux-saga';

function sendTimerMessage() {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ timer: 'popup' }, (response) => {
      resolve(response);
    });
  });
}

function sendDomainMessage(domain) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ domain }, (response) => {
      if (response === 'invalid') {
        reject(response);
      }
      resolve(response);
    });
  });
}

function* editDomain(action) {
  try {
    yield call(sendDomainMessage, action.domain);
    chrome.tabs.create({ url: chrome.extension.getURL('options.html') });
  } catch (e) {
    console.error(e);
  }
}

function* getTimer() {
  try {
    const timer = yield call(sendTimerMessage);
    yield put({ type: 'RECIEVE_TIMER', timer });
  } catch (e) {
    console.error(e);
  }
}
function* getTimerSaga() {
  yield* takeLatest('GET_TIMER', getTimer);
}
function* editDomainSaga() {
  yield* takeLatest('EDIT_DOMAIN_MODAL', editDomain);
}
export default function* popupSagas() {
  yield fork(addFilterSaga);
  yield fork(getTimerSaga);
  yield fork(editDomainSaga);
}
