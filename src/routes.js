import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import ExtraDimensions from 'react-native-extra-dimensions-android';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AplicationNavigator, AplicationNavigatorPet} from './AplicationStack';
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
          <View>
            <Icon name="home" color={tintColor} size={28} />
          </View>
        ),
        tabBarOptions: {
          activeTintColor: '#ffb300',
          inactiveTintColor: 'rgba(0,0,0,0.41)',
          style: {
            position: 'absolute',
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
      },
    },
    Pets: {
      screen: AplicationNavigatorPet,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon name="paw" color={tintColor} size={33} />
          </View>
        ),
        tabBarOptions: {
          activeTintColor: '#ffb300',
          inactiveTintColor: 'rgba(0,0,0,0.41)',
          style: {
            position: 'absolute',
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
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: null,
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon name="id-badge" color={tintColor} size={28} />
          </View>
        ),
        tabBarOptions: {
          activeTintColor: '#ffb300',
          inactiveTintColor: 'rgba(0,0,0,0.41)',
          style: {
            position: 'absolute',
            width: ExtraDimensions.getRealWindowWidth(),
            backgroundColor: '#fff',
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
          },
        },
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
