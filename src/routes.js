import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';

const Routes = createAppContainer(
    createSwitchNavigator({ 
        Home: {
            screen: Home,
        },
        Login: {
            screen: Login,
        }
    }),
);

export default Routes;
