import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import HomeAplication from '~/pages/HomeAplication/HomeAplication';


const Routes = createAppContainer(
    createSwitchNavigator({ 
        Home: {
            screen: Home,
        },
        Login: {
            screen: Login,
        },
        Register: {
            screen: Register,
        },
        HomeAplication: {
            screen: HomeAplication,
        },
    }),
);

export default Routes;
