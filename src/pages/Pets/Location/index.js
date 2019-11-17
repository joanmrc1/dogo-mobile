import React, { useState, useEffect } from 'react';
import { PermissionsAndroid, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MapPet() {

	useEffect(() => {
		requestLocationPermission();
	}, []);

	async function requestLocationPermission() {
		try {

		    const granted = await PermissionsAndroid.request(
		        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
		        {
		            'title': 'Permissão de Aplicativo',
		            'message': 'Perimssão para acessar o google maps.'
		        }
		    );

		    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
		        return true;

		    } else {
		        console.tron.log("location permission denied");
		        return false;
		    }

		} catch (err) {
		    console.tron.warn(err)
		}
	}

	return (
		<Container>
			<HeaderContent>
				<LabelHeader> Localização do </LabelHeader>
				<LabelPet> Ragnar </LabelPet>
			</HeaderContent>
			
			<MapView
	        	style={{height: 466, width: 400}}
	        	loadingEnabled
	        	region={{
		            latitude: 37.78825,
		            longitude: -122.4324,
		            latitudeDelta: 0.015,
		            longitudeDelta: 0.0121,
	        	}}
	        >
	        </MapView>
        </Container>
	);
}

const LabelPet = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: #08d2ce;
`

const LabelHeader = styled.Text`
	font-size: 20;
	font-weight: bold;
`

const HeaderContent = styled.View`
	flex-direction: row;
	padding: 5px;
	justifyContent: center;
`

const Container = styled.View`
	flex: 1;
`