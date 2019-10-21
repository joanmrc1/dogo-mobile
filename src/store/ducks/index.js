import { combineReducers } from 'redux';

import login from './login';
import register from './register';

const reducers = combineReducers({
  login,
  register
});

export default reducers;
