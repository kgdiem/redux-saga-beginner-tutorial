import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects'

/*
from example
export function* helloSaga() {
    console.log('Hello Sagas!');
}

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
*/

function* fetchPosts() {
    const res = yield fetch('https://jsonplaceholder.typicode.com/posts');

    const json = yield res.json();

    yield put({ type: 'FETCH_COMPLETE', value: json });

    return json;
}

export function* rootPostSaga() {
    yield takeEvery('FETCH_POSTS', fetchPosts)
}