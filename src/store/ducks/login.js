import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncLogin: ['email', 'password'],
    errorLogin: ['message'],
    errorClear: null
});

export const INITIAL_STATE = {
    error: false,
};

export const errorLogin = (state = INITIAL_STATE, action) => {
    return { ...state, error: action.message}
};

export const errorClear = (state = INITIAL_STATE, action) => {
    return { ...state, error: action.message}
};

export default createReducer(INITIAL_STATE, {
    [Types.ERROR_LOGIN]: errorLogin,
    [Types.ERROR_CLEAR]: errorClear
});
