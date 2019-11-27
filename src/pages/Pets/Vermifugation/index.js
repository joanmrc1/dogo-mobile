import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, ScrollView, Platform} from 'react-native';
import {Item, Input, Label, Row, Picker} from 'native-base';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavigationService from '../../../services/navigation';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import { momentePtBr } from '../../../services/utils';

export default function Vermifugation({ navigation }) {
	useEffect(() => {
		if(navigation.getParam('vermifugateDate')) setValuesUpdateDate(navigation.getParam('vermifugateDate'));
	}, [])

	const dispatch = useDispatch();
	const [showDate, setShowDate] = useState(false);
	const [showDateRetry, setShowDateRetry] = useState(false);
	const [date, setDate] = useState(Date.now());
	const [labelDate, setLabelDate] = useState('Data da consulta');
	const [labelDateRetry, setLabelDateRetry] = useState('Repetir em');
	const [dateOfAppointment, setDateOfAppointment] = useState('');
	const [repeatIn, setRepeatIn] = useState('');
	const [vermifuge, setVermifuge] = useState('');
	const [weight, setWeight] = useState('');
	const [petId, setPetId] = useState(navigation.state.params.id);

	function setValuesUpdateDate(data) {
		setVermifuge(data.vermifuge);
		setWeight(data.weight);
		setDateOfAppointment(data.dateOfAppointment);
		setRepeatIn(data.repeatIn);
		setLabelDate(data.dateOfAppointment);
		setLabelDateRetry(data.repeatIn);
	}

	async function handleSubmit() {
		const vermifugations = [
			{
				id: Math.random(),
				vermifuge,
				petId,
				weight,
				dateOfAppointment,
				repeatIn
			}
		]

		await dispatch({type: 'SET_VERMIFUGATION', vermifugations });

		NavigationService.navigate('Pets');
	}

	async function setValueDate(e, obj) {
		momentePtBr();

		const formatedDate = moment(obj)
			.locale('pt-br')
			.format('Do MMMM YYYY')
			.toString();

		setShowDate(!showDate)
		setLabelDate(formatedDate);
		setDateOfAppointment(moment(obj).format('YYYY-MM-DD'));
	}

	function setValueDateRetry(e, obj) {
		momentePtBr();

		const formatedDate = moment(obj)
			.locale('pt-br')
			.format('Do MMMM YYYY')
			.toString();

		setShowDateRetry(!showDateRetry)
		setLabelDateRetry(formatedDate);
		setRepeatIn(moment(obj).format('YYYY-MM-DD'));
	}

  	return (
	    <Content>
	    	<ScrollView>
				<ContentForm>
					<ItemRow rounded>
			            <Icon active name="x-ray" size={25} color={'#08d2ce'} />
			            <InputItem
			            	placeholder="Vermifugo"
			            	value={vermifuge}
            				onChangeText={value => setVermifuge(value)}
			            />
			        </ItemRow>

			        <ItemRow rounded>
			            <Icon active name="weight" size={25} color={'#08d2ce'} />
			            <InputItem 
			            	placeholder="Peso" 
			            	keyboardType={'numeric'} 
			            	value={weight}
            				onChangeText={value => setWeight(value)}
			            />
			        </ItemRow>

			        <ItemRow rounded>
			            <Icon active name="calendar-alt" size={25} color={'#08d2ce'} />
			            <DateSelect onPress={() => setShowDate(!showDate)}>
			            	<LabelDate> {labelDate} </LabelDate>
			            </DateSelect>
			        </ItemRow>

			        <ItemRow rounded>
			            <Icon active name="calendar-check" size={25} color={'#08d2ce'} />
			            <DateSelect onPress={() => setShowDateRetry(!showDateRetry)}>
			            	<LabelDate> {labelDateRetry} </LabelDate>
			            </DateSelect>
			        </ItemRow>

			        { showDate &&
			        	<DateTimePicker
				        	value={date}
		                    mode="date"
		                    display="default"
		                    onChange={(e, date) => setValueDate(e, date)} 
		                />
	                }

	                { showDateRetry && 
	                	<DateTimePicker
		                	value={date}
		                    mode="date"
		                    display="default"
		                    onChange={(e, date) => setValueDateRetry(e, date)} 
		                />
	                }

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

const LabelDate = styled.Text`
	font-size:16px;
	color: #5c666b;
`;

const DateSelect = styled(TouchableOpacity)`
	height: 50px;
	width: 90%;
	padding-left: 10px;
	justify-content: center;
`;

const LabelInput = styled.Text`
  font-size: 19px;
  font-weight: 800;
  color: #000000;
`;;

const InputItem = styled(Input)`
  padding: 15px;
  font-size: 17px;
  height: 57px;
`;

const RowFormItem = styled(Row)`
  justify-content: flex-start;
  alignitems: flex-start;
  aligncontent: flex-start;
`;

const ItemRow = styled(Item)`
  margin-top: 15px;
  padding-right: 5px;
  padding-left: 5px;
  justify-content: space-around;
`;

const ContentForm = styled.View`
	padding: 5px;
`; 

const Content = styled.View`
	flex: 1;
`