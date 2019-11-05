import React from 'react';
import {Platform, View, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeAplication from '~/pages/HomeAplication/HomeAplication';
import Pets from '~/pages/Pets/PetsScreen';
import Profile from '~/pages/Profile/ProfileScreen';
import RegisterPet from '~/pages/Pets/Register';

export const AplicationNavigator = createStackNavigator({
	HomeAplication: {
        screen: HomeAplication,
        navigationOptios: {
            theaderTitle: 'Home',
            headerStyle: {
              backgroundColor: '#ccc',
            },
        },
      },
    Profile: {
        screen: Profile,
        navigationOptios: {
            tabBarLabel: 'Meus Pets',
            headerTitle: 'Pets',
        },
    }
},
{
    headerMode: 'none',
}); 

export const AplicationNavigatorPet = createStackNavigator({
    Pets: {
        screen: Pets,
        navigationOptios: {
            header: null,
            headerMode: 'none'
        },
    },

    RegisterPet: {
        screen: RegisterPet,
        navigationOptios: {
            tabBarLabel: 'Meus Pets',
            headerTitle: 'Cadastro de Pet',
            headerShown: false
        },
    },
  },
  {
    headerMode: 'none',
  },
);

