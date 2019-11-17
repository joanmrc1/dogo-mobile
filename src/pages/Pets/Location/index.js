import MapView from 'react-native-maps';
import React, { useState, useEffect } from 'react';

export default function MapPet() {

	return (
		 <MapView
		    initialRegion={{
		      latitude: 37.78825,
		      longitude: -122.4324,
		      latitudeDelta: 0.0922,
		      longitudeDelta: 0.0421,
		    }}
		  />
	)
}