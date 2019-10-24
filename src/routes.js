import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '~/pages/Main';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import HomeAplication from '~/pages/HomeAplication/HomeAplication';

const AuthStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    }
},
{
    headerMode: 'none'
});


const Routes = createAppContainer(
    createSwitchNavigator({
        Auth: AuthStack,
        HomeAplication: {
            screen: HomeAplication,
        },
    },
    {
        initialRouteName: 'Auth',
    }),
);

export default Routes;
