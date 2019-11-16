import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncVetmifugationStorage: ['date', 'vermifuge', 'weight', 'labelDate', 'labelDateRetry' ]
});

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {});