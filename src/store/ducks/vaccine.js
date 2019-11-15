import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncVaccineStorage: ['name', 'type', 'labelDate', 'labelDateRetry']
});

export const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {});