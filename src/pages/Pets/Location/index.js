import MapView from 'react-native-maps';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MapPet() {

	return (
		<Container>
			<MapView
			    initialRegion={{
			      latitude: 37.78825,
			      longitude: -122.4324,
			      latitudeDelta: 0.0922,
			      longitudeDelta: 0.0421,
			    }}
		  	/>	
		</Container>
	)
}

const Container = styled.View`
	flex: 1;
`