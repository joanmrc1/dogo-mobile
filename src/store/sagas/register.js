import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';

import NavigationService from '../../services/navigation';

export function* asyncRegister({ payload }) {

  const body = {
    name: payload.name,
    birthday: payload.birthday,
    email: payload.email,
    password: payload.password,
  };

  try {
    const { data } = yield call(api.post, '/register', body);
    
    console.tron.log(data);
    
    yield call(AsyncStorage.multiSet, [
      [`@DogoApp:token`, data.token],
      [`@DogoApp:user`, JSON.stringify(data.user)],
    ]);

    yield call(NavigationService.navigate, 'HomeAplication');
  } catch (err) {
    console.tron.log(err)
    yield put({
      type: 'ERROR_REGISTER',
      payload: { message: 'Falha na conexão, tente novamente' },
    });
  }
}
