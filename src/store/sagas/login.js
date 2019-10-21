import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';

import NavigationService from '../../services/navigation';

export function* asyncAuth({ payload }) {

  const body = {
    email: payload.email,
    password: payload.password,
  };

  console.tron.log(payload);

  try {
    const { data } = yield call(api.post, '/login', body);
    
    console.tron.log(data);
    // yield call(console.tron.log(data));
    // if (data.token === false) {
    //   yield put({
    //     type: 'ERROR_LOGIN',
    //     payload: { message: 'Email ou senha inválidos' },
    //   });
    // } else {
    //   yield call(AsyncStorage.multiSet, [
    //     [`@DogoApp:token`, data.token],
    //     [`@DogoApp:user`, JSON.stringify(data.user)],
    //   ]);

    //   yield call(NavigationService.navigate, 'HomeAplication');
    // }
  } catch (err) {
    console.tron.log(err)
    yield put({
      type: 'ERROR_LOGIN',
      payload: { message: 'Falha na conexão, tente novamente' },
    });
  }

  // function* removeLoading() {
  //   yield put({
  //     type: 'loading/NO_LOADING',
  //   });
  // }
}
