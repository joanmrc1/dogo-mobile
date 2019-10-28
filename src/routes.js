import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from '~/pages/Main';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import HomeAplication from '~/pages/HomeAplication/HomeAplication';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const HomeAplicationStack = createBottomTabNavigator({
    HomeAplication: {
        screen: HomeAplication,
        navigationOptios: {
            tabBarLabel: 'Incio',
            // tabBarIcon: ({ tintColor }) => (
            //     <Icon name="home" color={tintColor} size={24}>
            // );
        },
    },
    MainApp: {
        screen: Main,
    },
},
{
    headerMode: 'none',
    initialRoutes: 'HomeAplication',
    activeTintColor: '#e91e63',
    labelStyle: {
        fontSize: 25,
    },
    style: {
        backgroundColor: 'blue',
    },
});


const Routes = createAppContainer(
    createSwitchNavigator({
        Auth: AuthStack,
        Aplication: HomeAplicationStack,
    },
    {
        initialRouteName: 'Auth',
        activeTintColor: 'orange',
        activeBackgroundColor: 'orange'
    }),
);

export default Routes;
