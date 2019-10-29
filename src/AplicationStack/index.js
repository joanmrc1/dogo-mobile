import React from 'react';
import { Platform, View, TouchableOpacity } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeAplication from '~/pages/HomeAplication/HomeAplication';
import Main from '~/pages/Main';

const AplicationNavigator = createStackNavigator({
	HomeAplication: {
        screen: HomeAplication,
        navigationOptios: {
            theaderTitle: 'Camera',
	        header: null,
	        headerVisible: true,
	        headerStyle: {
	          backgroundColor: '#ccc',
	        },
	        headerTitleStyle: Platform.select({
	          android: {
	            flex: 1,
	            textAlign: 'center',
	            paddingRight: 45,
	            color: '#fff',
	          },
	          ios: {
	            color: '#fff',
	          },
	        }),

            headerLeft: (
	          <Icon
	            style={{ color: '#fff' }}
	            name="arrow-left"
	            onPress={() => navigation.goBack(null)}
	            size={16}
	          />
	        ),
        },
    },
    Main: {
        screen: Main,
        navigationOptios: {
            tabBarLabel: 'Main BB',
            headerTitle: 'Main',
            header: null,
            headerLeft: (
	          <Icon
	            style={{ color: '#fff' }}
	            name="arrow-left"
	            onPress={() => navigation.goBack(null)}
	            size={16}
	          />
	        ),
        },
    },
});

export default AplicationNavigator;
