import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native'
import { DataTable } from 'react-native-paper';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '~/services/api';
import moment from 'moment';

export default function table({ navigation: { state: { params } } }) {
	const [vermifugations, setVermifugations] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getVermifugations	()
	}, []);

	async function getVermifugations() {
		setIsLoading(true)

		const { data } = await api.get('vermugations', {
			petId: params.id
		});

		setIsLoading(false)
		setVermifugations(data);
	}

	return (
		<Container>
			<DataTable>
				<DataTable.Header>
					<DataTable.Title>Nome do Vermifugo</DataTable.Title>
					<DataTable.Title>Data da Consulta</DataTable.Title>
				</DataTable.Header>

				{ vermifugations.length > 0 ? (
		        	vermifugations.map(vermigurate => (
		              <DataTable.Row key={vermigurate.id}>
		                <DataTable.Cell>{vermigurate.name}</DataTable.Cell>

		                <DataTable.Cell
		                  onPress={() => console.tron.log('oie')}
		                >
		                  {moment(vermigurate.date_of_appointment).format('DD/MM/YYYY')}
		                </DataTable.Cell>
		              </DataTable.Row>
		            ))
		          ) : (
		            isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : <NoResultText>Não há tipos vermifugação registradas ainda</NoResultText>
		          )
		      	}
			</DataTable>
		</Container>
	);
}

const NoResultText = styled.Text`
  padding: 20px 20px;
  text-align: center;
`;

const Container = styled.View`
	flex: 1;
	padding: 5px;
`