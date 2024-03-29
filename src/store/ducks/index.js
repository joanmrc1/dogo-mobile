import { combineReducers } from 'redux';

import login from './login';
import register from './register';
import theme from './theme';
import pet from './pet';
import vaccine from './vaccine';
import vermifugation from './vermifugation';
import user from './user';

const reducers = combineReducers({
  login,
  register,
  theme,
  pet,
  vaccine,
  vermifugation,
  user
});

export default reducers;
