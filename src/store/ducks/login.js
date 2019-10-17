import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncLogin: ['email', 'password'],
    errorLogin: ['message'],
    errorClear: [''],
});

const INITIAL_STATE = {
    error: false,
};

const errorLogin = (state = INITIAL_STATE, action) => [
    ...state,
    {error: action.message}
];

const errorClear = (state = INITIAL_STATE, action) => [
    ...state,
    {error: false},
];

export default createReducer(INITIAL_STATE, {
    [Types.ERROR_LOGIN]: errorLogin,
    [Types.ERROR_CLEAR]: errorClear,
});
