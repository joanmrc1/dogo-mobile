import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';
import { asyncAuth } from './login';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.ASYNC_LOGIN, asyncAuth),
  ]);
}
