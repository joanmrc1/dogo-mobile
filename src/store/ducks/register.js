import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncRegister: ['name', 'birthday', 'email', 'password'],
    errorRegister: ['message'],
    errorClear: null
});

const INITIAL_STATE = {
    error: false,
}

const errorRegister = (state = INITIAL_STATE, action) => {
    return { ...state, error: action.message}
};

const errorClear = (state = INITIAL_STATE, action) => {
    return { ...state, error: action.message}
};

export default createReducer(INITIAL_STATE, {
    [Types.ERROR_REGISTER]: errorRegister,
    [Types.ERROR_CLEAR]: errorClear
});
