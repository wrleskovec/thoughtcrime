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

function* getTimer() {
  try {
    const timer = yield call(sendTimerMessage);
    console.log(timer);
    yield put({ type: 'RECIEVE_TIMER', timer });
  } catch (e) {
    console.error(e);
  }
}
function* getTimerSaga() {
  yield* takeLatest('GET_TIMER', getTimer);
}
export default function* popupSagas() {
  yield fork(addFilterSaga);
  yield fork(getTimerSaga);
}
