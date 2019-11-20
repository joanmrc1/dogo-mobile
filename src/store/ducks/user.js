import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    setUser: ['id', 'nome', 'email', 'birthday']
});

const INITIAL_STATE = {
    user: {},
};

const setUser = (state = INITIAL_STATE, { payload }) => {
    return { ...state, user: payload.user}
};

export default createReducer(INITIAL_STATE, {
    [Types.SET_USER]: setUser
});
