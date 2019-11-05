import React from 'react';
import {Platform, View, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeAplication from '~/pages/HomeAplication/HomeAplication';
import Pets from '~/pages/Pets/PetsScreen';
import Profile from '~/pages/Profile/ProfileScreen';

const AplicationNavigator = createStackNavigator(
  {
    HomeAplication: {
      screen: HomeAplication,
      navigationOptios: {
        theaderTitle: 'Home',
        headerStyle: {
          backgroundColor: '#ccc',
        },
      },
    },
    Pets: {
      screen: Pets,
      navigationOptios: {
        tabBarLabel: 'Meus Pets',
        headerTitle: 'Pets',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptios: {
        tabBarLabel: 'Meus Pets',
        headerTitle: 'Pets',
      },
    },
  },
  {
    headerMode: 'none',
  },
);

export default AplicationNavigator;
