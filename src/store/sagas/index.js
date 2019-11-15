import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';
import { asyncAuth } from './login';

import { Types as RegisterTypes } from '../ducks/register';
import { asyncRegister } from './register';

import { Types as PetTypes } from '../ducks/pet';
import { asyncPetStore } from './pet';

export default function* rootSaga() {
  yield all([
    takeLatest(LoginTypes.ASYNC_LOGIN, asyncAuth),
    takeLatest(RegisterTypes.ASYNC_REGISTER, asyncRegister),
    takeLatest(PetTypes.ASYNC_PET_STORAGE, asyncPetStore),
  ]);
}
