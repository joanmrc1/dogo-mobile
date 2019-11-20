import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api'; 
import NavigationService from '../../services/navigation';

export function* asyncRegister({ payload }) {

  try {
    const { data } = yield call(api.post, '/register', {
      name: payload.name,
      birthday: payload.birthday,
      email: payload.email,
      password: payload.password,
    });

    const pet = data.favorityPet.length ? data.favorityPet[0] : {};
    const { pets, user } = data;
    
    yield call(AsyncStorage.multiSet, [
      [`@DogoApp:token`, data.token.token ],
      [`@DogoApp:user`, JSON.stringify(data.user)],
    ]);

    console.tron.log(data);

    yield put({ type: 'SET_PETS', payload: { pets }} );
    yield put({ type: 'SET_FAVORITY_PET', payload: { pet }} );
    yield put({ type: 'SET_USER', payload: { user }} );

    yield call(NavigationService.navigate, 'HomeAplication');
  } catch (err) {
    console.tron.log(err)
    yield put({
      type: 'ERROR_REGISTER',
      payload: { message: 'Falha na conexão, tente novamente' },
    });
  }
}
