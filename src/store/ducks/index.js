import { combineReducers } from 'redux';

import login from './login';
import register from './register';
import theme from './theme';

const reducers = combineReducers({
  login,
  register,
  theme,
});

export default reducers;
