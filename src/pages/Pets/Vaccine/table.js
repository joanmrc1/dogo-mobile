import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native'
import { DataTable } from 'react-native-paper';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '~/services/api';
import moment from 'moment';

export default function table({ navigation: { state: { params } } }) {
	const [vaccines, setVaccines] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getVaccines()
	}, []);

	async function getVaccines() {
		setIsLoading(true)

		const { data } = await api.get('vaccines', {
			petId: params.id
		});

		setIsLoading(false)
		setVaccines(data);
	}

	return (
		<Container>
			<DataTable>
				<DataTable.Header>
					<DataTable.Title>Nome da Vacina</DataTable.Title>
					<DataTable.Title>Data da Consulta</DataTable.Title>
				</DataTable.Header>

				{vaccines.length > 0 ? (
	            	vaccines.map(vaccine => (
		              <DataTable.Row key={vaccine.id} style={{justifyContent: 'space-between'}}>
		                <DataTable.Cell>{vaccine.name}</DataTable.Cell>

		                <DataTable.Cell
		                  onPress={() => console.tron.log('oie')}
		                >
		                  {moment(vaccine.vaccine_in).format('DD/MM/YYYY')}
		                </DataTable.Cell>
		              </DataTable.Row>
		            ))
		          ) : (
		            isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : <NoResultText>Não há tipos vacinas registradas ainda</NoResultText>
		          )
		      	}

				{/*<DataTable.Pagination
					page={1}
					numberOfPages={3}
					onPageChange={(page) => { console.log(page); }}
					label="1-2 of 6"
				/>*/}
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