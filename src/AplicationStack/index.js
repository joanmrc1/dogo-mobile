import React from 'react';
import {Platform, View, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeAplication from '~/pages/HomeAplication/HomeAplication';
import Profile from '~/pages/Profile/ProfileScreen';
import Pets from '~/pages/Pets/PetsScreen';
import RegisterPet from '~/pages/Pets/Register';
import Vermifugation from '~/pages/Pets/Vermifugation';

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
        navigationOptions: () => ({
            headerShown: false
        }),
    },
    RegisterPet: {
        screen: RegisterPet,
        navigationOptions: () => ({
            title: `Cadastro de Pet`,
        }),
    },
    Vermifugation: {
        screen: Vermifugation,
        navigationOptions: () => ({
            title: `Selecionar Infomação`,
        }),
    },
  },
  {
    defaultNavigationOptions: {
        headerTintColor: `#FFF`,
        headerStyle: {
            backgroundColor: '#ffb300',
        },
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    },
  }
);