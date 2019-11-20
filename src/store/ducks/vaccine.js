import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncVaccine: ['name', 'petId', 'type', 'vaccineIn', 'nextVaccine']
});

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {});