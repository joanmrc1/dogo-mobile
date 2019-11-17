import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Item, Input, Label, Row, Picker} from 'native-base';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavigationService from '../../../services/navigation';
import ActionButton from 'react-native-action-button';

export default function PetProfile() {

	return (
		<Content>
			<ContentImg>
				<PetImg source={require('../../../assets/img/rag_modelo.jpeg')} />
			</ContentImg>

			<ContentFloatButton>
		      <ActionButton buttonColor="#3498db">

		        <ActionButton.Item 
		          buttonColor='#1abc9c'
		          title="Vermifugação"
		          onPress={() => NavigationService.navigate('Vermifugation')}
		        >
		          <IconActionButton name="file-medical" />
		        </ActionButton.Item>

		        <ActionButton.Item
		          buttonColor='#9b59b6'
		          title="Vacinas"
		          onPress={() => NavigationService.navigate('Vaccine')}
		        >
		          <IconActionButton name="thermometer" />
		        </ActionButton.Item>
		      </ActionButton>
		    </ContentFloatButton>

			<ContentRadius>
				<ContentLabel>
					<LabelName> Ragnar </LabelName>
					<LabelSir> Joan Marcos </LabelSir>
				</ContentLabel>
					
				<ScrollView   horizontal>
					<ContentCard>
						<CardVaccine
							onPress={() => NavigationService.navigate('LocalePet')}
						>
							<LabelCard> Localização </LabelCard>
							<ContentDateVaccine>
								<IconCard name="globe-europe" size={30} />
							</ContentDateVaccine>
						</CardVaccine>

						<CardVaccine
							onPress={() => NavigationService.navigate('VaccineTable')}
						>
							<LabelCard> Vacina </LabelCard>
							<ContentDateVaccine>
								<LabelContentDate> 10/11/2019 </LabelContentDate>
								<IconCard name="syringe" size={30} />
							</ContentDateVaccine>
						</CardVaccine>
					
						<CardVaccine
							onPress={() => NavigationService.navigate('VermifugationTable')}
						>
							<LabelCard> Vermifugação </LabelCard>
							<ContentDateVaccine>
								<LabelContentDate> 10/11/2019 </LabelContentDate>
								<IconCard name="syringe" size={30} />
							</ContentDateVaccine>
						</CardVaccine>
					
						<CardVaccine>
							<LabelCard> Informações </LabelCard>
							<ContentDateVaccine>
								<LabelContentDate> 10/11/2019 </LabelContentDate>
								<IconCard name="syringe" size={30} />
							</ContentDateVaccine>
						</CardVaccine>
					</ContentCard>
				</ScrollView>
			</ContentRadius>
		</Content>
	);
}

const IconActionButton = styled(Icon)`
  font-size: 20px;
  height: 22px;
  color: #FFF;
`;

const ContentFloatButton = styled.View`
  position: absolute;
  height: 50%;
  width: 100%;
  margin-top: 100px;
  margin-left: 20px;
  zIndex: 1;
`;

const LabelContentDate = styled.Text`
	font-size: 18px;
	fontWeight: 800;
`;

const ContentDateVaccine = styled.View`
	flex-direction: row;
	justifyContent: space-between;
	alignItems: center;
	padding: 5px;
`

const IconCard = styled(Icon)`
`

const LabelCard = styled.Text`
	font-size: 20px;
	color: #000000;
`

const CardVaccine = styled(TouchableOpacity)`
	border: 1px solid #08d2ce;
	margin-right: 15px;
	border-radius: 15px;
	height: 150px;
	width: 150px;
	justifyContent: space-around;
	backgroundColor: #08d2ce;
	elevation: 3;
`

const ContentCard = styled.View`
	flex-direction: row;
	padding: 0px 5px 0px 20px;
	margin-top: 15px;
	backgroundColor: #f4f6f8;
	paddingBottom: 10px;
`

const LabelSir = styled.Text`
	padding-left: 5px;
	color: #9ca2a7;
`;

const LabelName = styled.Text`
	font-size: 35px;
	color: black;
	fontWeight: bold;
`

const ContentLabel = styled.View`
	padding-left: 5px;
`

const ContentRadius = styled.View`
	border-radius: 25px;
	margin-top: -20px;
	flex: 1;
	border: 1px solid #f4f6f8;
	backgroundColor: #f4f6f8;
`;

const PetImg = styled.Image`
	width: 100%;
	height: 100%;
	resizeMode: cover;
`;

const ContentImg = styled.View`
	height: 55%;
	width: 100%;
`;

const Content = styled.View`
	backgroundColor: transparent;
	flex: 1;
`;