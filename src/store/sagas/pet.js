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

	let petsVelhos = [];

	const formData = new FormData();

	Object.keys(payload).forEach((key) => {
    	formData.append(key, payload[key]);
	});

	petsVelhos.push(payload.oldPet);

	console.tron.log(formData)

	try {
		const response = yield call(api.post, 'pets', formData, options);

		console.tron.log(petsVelhos, response, payload);

		// yield put({ type: 'SET_PETS', payload: { petsNew }} );

		// yield call(NavigationService.navigate, 'Pets');
	} catch (err) {
		console.tron.log('ERROR: ',err);

		yield put({
		  type: 'ERROR_LOGIN',
		  payload: { message: 'Falha na conexão, tente novamente' },
		});
	}	
}