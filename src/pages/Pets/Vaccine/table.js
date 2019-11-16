import React, {useState, useEffect} from 'react';
import { DataTable } from 'react-native-paper';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '~/services/api';

export default function table() {
	const [vaccines, setVaccines] = useState([]);

	useEffect(() => {

	}, []);

	return (
		<Container>
			<DataTable>
				<DataTable.Header>
					<DataTable.Title>Nome da Vacina</DataTable.Title>
					<DataTable.Title>Data da Consulta</DataTable.Title>
				</DataTable.Header>

				{vaccines && vaccines.length > 0 ? (
	            	vaccines.map(vaccine => (
		              <DataTable.Row key={vaccine.id}>
		                <DataTable.Cell>{vaccine.name}</DataTable.Cell>

		                <DataTable.Cell
		                  numeric
		                  onPress={() => console.tron.log('oie')}
		                >
		                  {vaccine.vaccine_in}
		                </DataTable.Cell>
		              </DataTable.Row>
		            ))
		          ) : (
		            <NoResultText>Não há tipos vacinas registradas ainda</NoResultText>
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