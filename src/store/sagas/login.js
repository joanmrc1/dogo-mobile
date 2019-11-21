import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';

import NavigationService from '../../services/navigation';

export function* asyncAuth({ payload }) {

  const body = {
    email: payload.email,
    password: payload.password,
  };

  try {
    const { data } = yield call(api.post, '/login', body);

    const response = yield call(verifyLogin, data);

    if (!response) return;

    const pet = data.favorityPet.length ? data.favorityPet[0] : {};

    const { pets, user } = data;
    
    yield call(AsyncStorage.multiSet, [
      [`@DogoApp:token`, data.token.token ],
      [`@DogoApp:user`, JSON.stringify(data.user)],
    ]);

    yield put({ type: 'SET_PETS', pets });
    yield put({ type: 'SET_FAVORITY_PET', payload: { pet }} );
    yield put({ type: 'SET_USER', payload: { user }} );

    yield call(NavigationService.navigate, 'HomeAplication');
    
  } catch (err) {
    console.tron.log('ERROR: ',err);
    
    yield put({
      type: 'ERROR_LOGIN',
      payload: { message: 'Falha na conexão, tente novamente' },
    });
  }
}

function* verifyLogin({uidField, passwordField}) {

  if (typeof uidField !== 'undefined') {
    yield put({
      type: 'ERROR_LOGIN', 
      message: 'Email não está cadastrado no sistema!'
    });

    return false;
  }

  if (typeof passwordField !== 'undefined') {
    yield put({
      type: 'ERROR_LOGIN', 
      message: 'A senha está incorreta!'
    });

    return false;
  }

  return true;
}
