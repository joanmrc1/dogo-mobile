import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
    theme: ['theme'],
});

const INITIAL_STATE = {
    color: '#ffb300',
};

const chooseTheme = (state = INITIAL_STATE, action) => {
    return { ...state, color: action.theme}
};

export default createReducer(INITIAL_STATE, {
    [Types.THEME]: chooseTheme,
});