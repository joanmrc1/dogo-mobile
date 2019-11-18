import React, {useEffect} from 'react';
import { ActivityIndicator, View, ImageBackground } from 'react-native'
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import api from '~/services/api';
import NavigationService from '~/services/navigation';
import AsyncStorage from '@react-native-community/async-storage';

export default function loading() {
	const dispatch = useDispatch();

	useEffect(() => {
	    verifyToken()
	}, [])

	async function verifyToken() {
		const token = await AsyncStorage.getItem('@DogoApp:token');

		if (token === null) {
		    NavigationService.navigate('Login');
		    return;
		}

		getInfo();
	}

	async function getInfo() {
		const { data } = await api.get('info/user')

		await setAction(data)
	}

	async function setAction({user, pets, favorityPet}) {
		const pet = favorityPet.length ? favorityPet[0] : {};

		await dispatch({type: 'SET_PETS', payload: { pets }});
		await dispatch({type: 'SET_FAVORITY_PET', payload: { pet }});
		await dispatch({type: 'SET_USER', payload: { user }});

		NavigationService.navigate('HomeAplication');
	}

	return (
		<ImageBackground
	      source={require('../assets/img/newbg.png')}
	      style={{flex: 1}}
	     >
			<Container>
				<ActivityIndicator size="large" color="#0000ff" />
			</Container>
		</ImageBackground>
	);
}

const Container = styled.View`
	flex: 1;
	justifyContent: center;
`