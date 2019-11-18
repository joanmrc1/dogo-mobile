import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncVermifugation: ['vermifuge', 'petId', 'weight', 'dateOfAppointment', 'repeatIn']
});

console.tron.log(Types);

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {});