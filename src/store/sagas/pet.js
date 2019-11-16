import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';
import NavigationService from '../../services/navigation';

export function* asyncPetStore({ payload }) {

	const options = {
		headers: {
		  'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
		},
	};

	const formData = new FormData();

	Object.keys(payload).forEach((key) => {
    	formData.append(key, payload[key]);
	});

	try {
		const { data } = yield call(api.post, 'pets', formData, options);

		console.tron.log('error', data);

		yield call(NavigationService.navigate, 'Pets');
	} catch (err) {
		console.tron.log('ERROR: ',err);

		yield put({
		  type: 'ERROR_LOGIN',
		  payload: { message: 'Falha na conexão, tente novamente' },
		});
	}	
}6