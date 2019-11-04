import React from 'react';
// import {View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import Icon from 'react-native-vector-icons/FontAwesome';
import AplicationNavigator from './AplicationStack';
import BottomContainer from './AplicationStack/BottomContainer';

import HomeAplication from '~/pages/HomeAplication/HomeAplication';
import Pets from '~/pages/Pets/PetsScreen';
import Profile from '~/pages/Profile/ProfileScreen';

const AuthStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  {
    headerMode: 'none',
  },
);

const HomeAplicationStack = createBottomTabNavigator(
  {
    Inicio: {
      screen: AplicationNavigator,
      navigationOptions: {
        showLabel: false,
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={28} />
        ),
        tabBarOptions: {activeTintColor: 'blue'},
      },
    },
    Pets: {
      screen: Pets,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({tintColor}) => (
          <Icon name="paw" color={tintColor} size={33} />
        ),
        tabBarOptions: {activeTintColor: 'blue'},
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({tintColor}) => (
          <Icon name="id-badge" color={tintColor} size={28} />
        ),
        tabBarOptions: {activeTintColor: 'blue'},
      },
    },
  },
  {
    initialRoutes: 'HomeAplication',
    // tabBarComponent: props => (<BottomContainer {...props} />),
  },
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Aplication: HomeAplicationStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

export default Routes;
