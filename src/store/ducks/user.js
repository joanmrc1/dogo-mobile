import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    setUser: ['user']
});

const INITIAL_STATE = {
    user: {},
};

const setUser = (state = INITIAL_STATE, action) => {
    return { ...state, user: action.user}
};

export default createReducer(INITIAL_STATE, {
    [Types.SET_USER]: setUser
});
