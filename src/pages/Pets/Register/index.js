import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Item, Input,Label, Row, Picker} from 'native-base';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../../../services/navigation';

export default function RegisterPet() {

	const [name, setName] = useState('');

	function onValueChange() {

	}

	function handleSubmit() {

	}

	function BackRoute() {
		NavigationService.navigate('Pets');
	}

	return (
		<Content>
			<ScrollView>
				<Header>
					<ContentIcon onPress={() => BackRoute()}>
						<IconArrow active name='arrow-left' size={30} color={'#FFF'}/>
					</ContentIcon>
					<ContentHeaderTitle>
						<LabelTitle>
							Cadastro de Pet <Icon active name='paw' size={25} color={'#FFF'}/>
						</LabelTitle>
					</ContentHeaderTitle>
				</Header>

				<ContentForm>
					<ItemRow rounded>
		              <Icon active name='book' size={25} color={'#ffb300'}/>
		              <InputItem placeholder="Meu Nome ex: Ragnar Lord*" value={name} onChangeText={value => setName(value)} />
		            </ItemRow>

					<ItemRow>
						<Icon active name='venus-mars' size={25} color={'#ffb300'}/>
			            <Select
			              note
			              mode="dropdown"
			              selectedValue={'default'}
			              onValueChange={onValueChange()}
			            >
			              <ItemSelect label="Selecione o Sexo" value="default" />
			              <ItemSelect label="Fêmea" value="F" />
			              <ItemSelect label="Macho" value="M" />
			            </Select>
		            </ItemRow>

		            <ItemRow rounded>
		              <Icon active name='paw' size={25} color={'#ffb300'}/>
		              <InputItem placeholder="Raça ex: Poodle, Siamês *..." />
		            </ItemRow>

		            <ItemRow rounded>
		              <Icon active name='paw' size={25} color={'#ffb300'}/>
		              <InputItem placeholder="species ex: Cão, Gato *..." />
		            </ItemRow>

		            <ItemRow rounded>
		              <Icon active name='paw' size={25} color={'#ffb300'}/>
		              <InputItem placeholder="Pelagem ex: curto, longo *..." />
		            </ItemRow>

		            <ItemRow rounded>
		              <Icon active name='calendar' size={25} color={'#ffb300'}/>
		              <InputItem placeholder="Nacimento ex: 27/10/1996 *..." />
		            </ItemRow>

		            <ItemRow rounded>
		              <Icon active name='user-md' size={25} color={'#ffb300'}/>
		              <InputItem placeholder="Médico veterinário" />
		            </ItemRow>

		            <ContentButton> 
	          			<ButtonAddPet onPress={() => handleSubmit()}> 
	          				<LabelButton> 🐱 Salvar 🐶 </LabelButton>
	          			</ButtonAddPet>
	          		</ContentButton>
				</ContentForm>
        	</ScrollView>
		</Content>
	);
}

const LabelButton = styled.Text`
    font-size: 17px;
    color: #FFF;
`;

const ButtonAddPet = styled(TouchableOpacity)`
	padding: 8px;
	border: 1px solid red;
	margin-top: 10px;
	background-color: #ffb300;
	border: 1px solid #ffb300;
	border-radius: 10px;
	align-content: center;
`;

const ContentButton = styled.View`
	justify-content: center;
	align-items: center;
`;

const ItemSelect = styled(Picker.Item)`
	color: #000000;
`;

const Select = styled(Picker)`
	margin-top: 15px;
	color: #000000;
	justifyContent: center;
`;

const LabelInput = styled.Text`
	font-size: 19px;
	font-weight: 800;
	color: #000000;
`

const InputItem = styled(Input)`
	padding: 15px;
`;

const RowFormItem = styled(Row)`
	justify-content: flex-start;
	alignItems: flex-start;
	alignContent: flex-start;
`;

const ItemRow = styled(Item)`
	margin-top: 15px;
	padding-right: 5px;
	padding-left: 5px;
	justifyContent:space-around;
`;

const ContentForm = styled.View`
	margin-top: 10px;
	padding: 5px;
`;

const LabelTitle = styled.Text`
	font-size: 26px;
	font-weight: bold;
	color: #FFF;
`;

const ContentHeaderTitle = styled.View`
	width: 100%;
	padding: 10px;
	alignItems: center;
`;

const ContentIcon = styled(TouchableOpacity)`
	padding: 10px;
	position: absolute;
`;

const IconArrow = styled(Icon)`
`;

const Header = styled.View`
	background-color: #ffb300;
	border: 1px solid #ffb300;
	elevation: 5;
`;

const Content = styled.View`
`;