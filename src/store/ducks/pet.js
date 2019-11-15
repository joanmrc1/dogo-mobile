import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncPetStorage: ['name', 'gender', 'breed', 'species', 'fur', 'veterinary', 'avatar', 'birthday']
});

export const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {});