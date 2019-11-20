import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncPetStore: ['name', 'gender', 'avatar', 'breed', 'species', 'fur', 'veterinary', 'avatar', 'birthday', 'oldPet'],
    setPets: ['pets'],
    setFavorityPet: ['pet'],
});

export const INITIAL_STATE = {
	pets: [],
	favorityPet: {},
};

export const setPets = (state = INITIAL_STATE, { payload }) => {
    return { ...state, pets: [...INITIAL_STATE.pets, ...payload.pets] }
};

export const setFavorityPet = (state = INITIAL_STATE, { payload }) => {
    return { ...state, favorityPet: payload.pet }
};

export default createReducer(INITIAL_STATE, {
	[Types.SET_PETS]: setPets,
	[Types.SET_FAVORITY_PET]: setFavorityPet
});

