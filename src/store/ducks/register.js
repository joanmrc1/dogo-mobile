import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    asyncRegister: ['name','birthday','email','password'],
    errorRegister: ['message'],
    errorClear: [''],
});

console.tron.log(Types, Creators)

const INITIAL_STATE = {
    error: false,
};

const errorRegisterUser = (state = INITIAL_STATE, action) => [
    ...state,
    {error: action.message}
];

const errorClear = (state = INITIAL_STATE, action) => [
    ...state,
    {error: false},
];

export default createReducer(INITIAL_STATE, {
    [Types.ERROR_REGISTER]: errorRegisterUser,
    [Types.ERROR_CLEAR]: errorClear,
});
