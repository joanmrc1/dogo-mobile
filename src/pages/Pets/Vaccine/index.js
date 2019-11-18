import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Platform} from 'react-native';
import {Item, Input, Label, Row, Picker} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker'
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavigationService from '../../../services/navigation';
import moment from 'moment';

export default function Vaccine({ navigation: { state: { params } } }) {
	const [showDate, setShowDate] = useState(false);
	const [showDateRetry, setShowDateRetry] = useState(false);
	const [date, setDate] = useState(Date.now());
	const [vaccineIn, setVaccineIn] = useState('');
	const [nextVaccine, setNextVaccine] = useState('');
	const [labelVaccineIn, setLabelVaccineIn] = useState('Data da vacina');
	const [labelNextVaccine, setLabelNextVaccine] = useState('Repetir em ...');
	const [vaccine, setVaccine] = useState('');
	const [type, setType] = useState('');
	const [petId, setPetId] = useState(params.id);
	const dispatch = useDispatch();

	function handleSubmit() {
		dispatch({type: 'ASYNC_VACCINE', payload: {
			vaccine,
			petId,
			type,
			vaccineIn,
			nextVaccine
		}});
	}

	async function setValueDate(e, obj) {
		momentePtBr();

		const formatedDate = moment(obj)
			.locale('pt-br')
			.format('Do MMMM YYYY')
			.toString();

		setShowDate(false);
		setLabelVaccineIn(formatedDate);
		setVaccineIn(moment(obj).format('YYYY-MM-DD'));
	}

	function setValueDateRetry(e, obj) {
		momentePtBr();

		const formatedDate = moment(obj)
			.locale('pt-br')
			.format('Do MMMM YYYY')
			.toString();

		setShowDateRetry(false);
		setLabelNextVaccine(formatedDate);
		setNextVaccine(moment(obj).format('YYYY-MM-DD'));
	}

	function momentePtBr() {
		return moment.defineLocale('pt-br', {
	        months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
	        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
	        weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
	        weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
	        weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY [às] LT',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] LT'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : '%s atrás',
	            s : 'segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinal : '%dº'
	    });
	}
	
  	return (
	    <Content>
	    	<ScrollView>
				<ContentForm>
					<ItemRow rounded>
			            <Icon active name="syringe" size={25} color={'#08d2ce'} />
			            <InputItem
			            	placeholder="Vacina"
			            	value={vaccine}
            				onChangeText={value => setVaccine(value)}
			            />
			        </ItemRow>

			        <ItemRow rounded>
			            <Icon active name="file-prescription" size={25} color={'#08d2ce'} />
			            <InputItem 
			            	placeholder="Tipo" 
			            	value={type}
            				onChangeText={value => setType(value)}
			            />
			        </ItemRow>

			        <ItemRow rounded>
			            <Icon active name="calendar-alt" size={25} color={'#08d2ce'} />
			            <DateSelect onPress={() => setShowDate(!showDate)}>
			            	<LabelDate> {labelVaccineIn} </LabelDate>
			            </DateSelect>
			        </ItemRow>

			        <ItemRow rounded>
			            <Icon active name="calendar-check" size={25} color={'#08d2ce'} />
			            <DateSelect onPress={() => setShowDateRetry(!showDateRetry)}>
			            	<LabelDate> {labelNextVaccine} </LabelDate>
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