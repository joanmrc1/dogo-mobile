import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncVaccine: ['name', 'petId', 'type', 'vaccineIn', 'nextVaccine'],
    setVaccine: ['vaccinies']
});

export const INITIAL_STATE = {
	vaccinies: [],
};

export const setVaccine = (state = INITIAL_STATE, action) => {
	console.tron.log(state.vaccinies, action);

    return { ...state, vaccinies: [...state.vaccinies, ...action.vaccinies] }
};

export default createReducer(INITIAL_STATE, {
	[Types.SET_VACCINE]: setVaccine,
});