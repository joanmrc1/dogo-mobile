import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';
import NavigationService from '../../services/navigation';

export function* asyncVaccineStore({ payload }) {

	try {
		const { data } = yield call(api.post, 'vaccines', {
			name: payload.vaccine,
			pet_id: payload.petId,
			type: payload.type,
			vaccine_in: payload.vaccineIn,
			next_vaccine: payload.nextVaccine
		});

		yield call(NavigationService.navigate, 'Pets');
	} catch (err) {
		console.tron.log('ERROR: ',err);

		yield put({
		  type: 'ERROR_LOGIN',
		  payload: { message: 'Falha na conexão, tente novamente' },
		});
	}	
}