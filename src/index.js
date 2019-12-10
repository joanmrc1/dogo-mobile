import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';
import NavigationService from './services/navigation';

console.disableYellowBox = true;

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <Routes
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default App;
