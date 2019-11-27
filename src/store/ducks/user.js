import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    setUser: ['user']
});

const INITIAL_STATE = {
    user: {
    	name: 'Joan Marcos',
    	email: 'joanmrc96@gmail.com',
    	birthday: '27/10/1996'
    },
};

const setUser = (state = INITIAL_STATE, action) => {
    return { ...state, user: action.user}
};

export default createReducer(INITIAL_STATE, {
    [Types.SET_USER]: setUser
});
