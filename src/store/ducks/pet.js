import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncPetStore: ['name', 'gender', 'avatar', 'breed', 'species', 'fur', 'veterinary', 'avatar', 'birthday', 'oldPet'],
    setPets: ['pets'],
    setFavorityPet: ['pet'],
    removePet: ['id']
});

export const INITIAL_STATE = {
	pets: [
		{	
			name: "Ragnar Lord",
		    gender: "Macho",
		    breed: "pasto alemão",
		    species: "cão",
		    fur: "liso",
		    birthday: "27/10/2016",
		    veterinary: "Dr. Emanuel",
		    avatar: {
		    	preview: ''
		    },
		    user_id: 1,
		    favorite: false,
		    created_at: "2019-11-21 01:57:48",
		    updated_at: "2019-11-21 01:57:48",
		    id: 1
		}
	],
	favorityPet: {
		name: "Ragnar Lord",
	    gender: "Macho",
	    breed: "pasto alemão",
	    species: "cão",
	    fur: "liso",
	    birthday: "27/10/2016",
	    veterinary: "Dr. Emanuel",
	    avatar: null,
	    user_id: 1,
	    favorite: false,
	    created_at: "2019-11-21 01:57:48",
	    updated_at: "2019-11-21 01:57:48",
	    id: 1
	},
};

export const setPets = (state = INITIAL_STATE, action) => {
	console.tron.log(state.pets, action);

    return { ...state, pets: [...action.pets] }
};

export const removePet = async (state = INITIAL_STATE, action) => {

	const newPets = await state.pets.filter(item => item.id !== action.id)

    return { ...state, pets: [...newPets] }
};

export const setFavorityPet = (state = INITIAL_STATE, { payload }) => {
    return { ...state, favorityPet: payload.pet }
};

export default createReducer(INITIAL_STATE, {
	[Types.SET_PETS]: setPets,
	[Types.REMOVE_PET]: removePet,
	[Types.SET_FAVORITY_PET]: setFavorityPet
});

