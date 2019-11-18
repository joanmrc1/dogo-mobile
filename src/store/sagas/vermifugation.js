import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';
import NavigationService from '../../services/navigation';

export function* asyncVermifugationStore({ payload }) {

	try {
		const { data } = yield call(api.post, 'vermugations', {
			name: payload.vermifuge,
			pet_id: payload.petId,
			weight: payload.weight,
			date_of_appointment: payload.dateOfAppointment,
			repeat_in: payload.repeatIn
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