import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncVermifugation: ['vermifuge', 'petId', 'weight', 'dateOfAppointment', 'repeatIn'],
	setVermifugation: ['vermifugations']
});

export const INITIAL_STATE = {
	vermifugations: [],
};

export const setVermifugation = (state = INITIAL_STATE, action) => {
	console.tron.log(state.vermifugations, action);

    return { ...state, vermifugations: [...state.vermifugations, ...action.vermifugations] }
};

export default createReducer(INITIAL_STATE, {
	[Types.SET_VERMIFUGATION]: setVermifugation,
});