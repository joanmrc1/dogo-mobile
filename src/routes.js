import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import Icon from 'react-native-vector-icons/FontAwesome';
import AplicationNavigator from './AplicationStack';
import BottomContent from './AplicationStack/BottomContainer';

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
    HomeApp: { screen: AplicationNavigator },
},
{
    headerMode: 'none',
    initialRoutes: 'HomeAplication',
    activeTintColor: '#e91e63',
    // tabBarComponent: BottomContainer,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      iconStyle: {
        width: 32,
        height: 32,
      },
      style: {
        height: 70,
        backgroundColor: '#fff',
      },
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
