import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '../../services/navigation';
import moment from 'moment';

export default function Pets() {
	const user = useSelector(state => state.user.user);
	const dispatch = useDispatch();
	
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [birthday, setBirthday] = useState(user.birthday);

	async function handleSubmit() {
		const user = {
	      id: Math.random(),
	      name,
	      email,
	      birthday: '27/10/1996'
	    }

	    await dispatch({type: 'SET_USER', user });

	    NavigationService.navigate('HomeAplication');
	}

	function logout() {
	    AsyncStorage.removeItem('@DogoApp:token');
	    AsyncStorage.removeItem('@DogoApp:user');
	    NavigationService.navigate('Login');
	  }

	return (
		<ScrollView>
			<Container>
			  <CardRadiusTop>
			    <ContentImage>
			      <ImgUser source={require('../../assets/img/userimg.jpg')} />
			    </ContentImage>

			    <ContentTitle>
			      <LabelTitleCard> {user.name} </LabelTitleCard>
			    </ContentTitle>
			  </CardRadiusTop>
			  <ContentForm>
			  	<HeaderForm>
			  		<LabelHeader> Minha Conta </LabelHeader>
		  			 <ButtonAddPet onPress={() => logout()}>
		              <LabelButton> Sair </LabelButton>
		            </ButtonAddPet>
			  	</HeaderForm>
			  	<ContentIunput>
			  		<InputText
				        label='Name'
				        value={name}
				        onChangeText={text => setName(text)}
				        mode='outlined'
				        selectionColor='#d61717'
				        underlineColor='#d61717'
				    />
			  	</ContentIunput>

			  	<ContentIunput>
			  		<InputText
				        label='Email'
				        value={email}
				        onChangeText={text => setEmail(text)}
				        mode='outlined'
				        selectionColor='#d61717'
				        underlineColor='#d61717'
				    />
			  	</ContentIunput>

			  	<ContentIunput>
			  		<InputText
				        label='birthday'
				        value={birthday}
				        onChangeText={text => setBirthday(text)}
				        mode='outlined'
				        selectionColor='#d61717'
				        underlineColor='#d61717'
				    />
			  	</ContentIunput>

			  	<ContentIunput>
			  		<InputText
				        label='Data de cadastro'
				        value={moment(user.created_at).format('DD/MM/YYYY').toString()}
				        mode='outlined'
				        selectionColor='#d61717'
				        underlineColor='#d61717'
				        editable={false}
				    />
			  	</ContentIunput>

			  	<ContentButton>
		            <ButtonAddPet onPress={() => handleSubmit()}>
		              <LabelButton> 🐱 Salvar 🐶 </LabelButton>
		            </ButtonAddPet>
		          </ContentButton>
			  </ContentForm>
			</Container>
		</ScrollView>
	);
}

const LabelButton = styled.Text`
  font-size: 17px;
  color: #fff;
`;

const ButtonAddPet = styled(TouchableOpacity)`
  padding: 8px;
  border: 1px solid red;
  margin: 7px 0px 25px 0px;
  background-color: #08d2ce;
  border: 1px solid #08d2ce;
  border-radius: 10px;
  align-content: center;
`;

const ContentButton = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`;

const LabelHeader = styled.Text`
	font-size: 20px;	
	font-weight: bold;
	color: #08d2ce;
`;

const HeaderForm = styled.View`
	padding: 5px;
	flex-direction: row;
	justifyContent: space-between;
	alignItems: center;
`;

const ContentIunput = styled.View`
`;

const InputText = styled(TextInput)`
	padding: 10px;
`;


const ContentForm = styled.View`
	margin-top: 30px;
	margin-bottom: 5px;
`;

const ContentTitle = styled.View`
  flex-direction: column;
  align-items: center;
`;

const LabelTitleCard = styled.Text`
  color: #fff;
  font-size: 25;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  margin: 5px 0 5px 0;
`;

const ImgUser = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

const ContentImage = styled.View`
  padding: 10px;
  align-items: center;
`;

const CardRadiusTop = styled.View`
  border: 1px solid #08d2ce;
  background-color: #08d2ce;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const Container = styled.View`
	flex: 1;
`