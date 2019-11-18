import React from 'react';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {AplicationNavigator, AplicationNavigatorPet} from './AplicationStack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import HomeAplication from '~/pages/HomeAplication/HomeAplication';
import Pets from '~/pages/Pets/PetsScreen';
import Profile from '~/pages/Profile/ProfileScreen';
import LoadingInfo from '~/services/loading';

function navigationOptionsBottomNavigate(IconParm) {
  return {
    showLabel: false,
    tabBarIcon: ({tintColor}) => (
      <View>
        <Icon name={IconParm} color={tintColor} size={28} />
      </View>
    ),
    tabBarOptions: {
      activeTintColor: '#08d2ce',
      inactiveTintColor: 'rgba(0,0,0,0.41)',
      style: {
        position: 'relative',
        width: ExtraDimensions.getRealWindowWidth(),
        backgroundColor: '#fff',
        height: 55,
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
    },
  }
}

const AuthStack = createStackNavigator(
  {
    LoadingInfo:  {
      screen: LoadingInfo,
    },
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
      navigationOptions: navigationOptionsBottomNavigate('home'),
    },
    Pets: {
      screen: AplicationNavigatorPet,
      navigationOptions: navigationOptionsBottomNavigate('paw'),
    },
    Profile: {
      screen: Profile,
      navigationOptions: navigationOptionsBottomNavigate('id-badge'),
    },
  },
  {
    initialRoutes: 'HomeAplication',
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
