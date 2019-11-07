import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Platform } from 'react-native';
import { Item, Input } from 'native-base';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../../services/navigation';
import Modal from "react-native-modal";

export default function PetsScreen() {

	const [isVisibleModal, setIsVisibleModal] = useState(false);

	function handlewNavigatePress(route) {
		setIsVisibleModal(false);
		NavigationService.navigate(route);
	}

	const ModalNavigate = () => {
		const deviceWidth = Dimensions.get("window").width;
		const deviceHeight = Platform.OS === "ios"
			? Dimensions.get("window").height
			: require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");

		return (
			<Modal
				isVisible={isVisibleModal}
				deviceWidth={deviceWidth}
				deviceHeight={deviceHeight}
				onBackdropPress={() => setIsVisibleModal(false)}
			>
				<ContentModal>
					<LabelTitleModal> 
						Selecione a Informação 
					</LabelTitleModal>
					<ContentButtonSelect>
						<Row>
							<ButtonNavigateSelect onPress={() => handlewNavigatePress('Vermifugation')}> 
		          				<LabelButtonSelect> Vermifugação > </LabelButtonSelect>
		          			</ButtonNavigateSelect>
						</Row>

						<Row>
							<ButtonNavigateSelect onPress={() => handlewNavigatePress('')}> 
		          				<LabelButtonSelect> Vacinas > </LabelButtonSelect>
		          			</ButtonNavigateSelect>
						</Row>

						<Row>
							<ButtonNavigateSelect onPress={() => handlewNavigatePress('')}> 
		          				<LabelButtonSelect> Minhas Informações > </LabelButtonSelect>
		          			</ButtonNavigateSelect>
						</Row>
					</ContentButtonSelect>
				</ContentModal>
			</Modal>
		)
	};

	return (
		<Content>
			<ModalNavigate />

			<ContentSerach>
				<ContentInputSerach>
					<ItemSearch rounded>
			            <Icon active name='search' size={25} color={'#FFF'} />
			            <Input placeholder='Nome do seu pet'/>
		          	</ItemSearch>
	          	</ContentInputSerach>

	          	<LabelTitleName> Olá, Joan Marcos </LabelTitleName>

	          	<LabelSubTitle> Listagem de todos os seus queridos pets </LabelSubTitle>
          	</ContentSerach>

          	<ContentCard>
          		<ContentButton> 
          			<ButtonAddPet onPress={() => NavigationService.navigate('RegisterPet')}> 
          				<LabelButton> 🐱 Adicionar Pet 🐶 </LabelButton>
          			</ButtonAddPet>
          		</ContentButton>
          		<ScrollView> 
		          	<CardPet onPress={() => setIsVisibleModal(true)}>
		                <ContentImage>
		                    <ImgPet source={require('../../assets/img/rag_modelo.jpeg')} />
		                </ContentImage>
		                <ContentInfoPet>
		                    <ContentRow> 
		                        <Row>
		                            <Icon name="book" size={20} color="#FFF" />
		                            <LabelNamePet>
		                                Ragnar Lord
		                            </LabelNamePet>
		                        </Row>

		                        <Row>
		                            <Icon name="paw" size={20} color="#FFF" />
		                            <LabelNamePet>
		                                10 anos
		                            </LabelNamePet>
		                        </Row>

		                        <Row>
		                            <Icon name="venus-mars" size={20} color="#FFF" />
		                            <LabelNamePet>
		                               Masculino
		                            </LabelNamePet>
		                        </Row>
		                    </ContentRow>

		                    <ButtonArrow> 
		                    	<Icon name="chevron-right" size={28} color="#FFF" />
		                    </ButtonArrow>
		                </ContentInfoPet>
		            </CardPet>

		            <CardPet>
		                <ContentImage>
		                    <ImgPet source={require('../../assets/img/gato.jpeg')} />
		                </ContentImage>
		                <ContentInfoPet>
		                    <ContentRow> 
		                        <Row>
		                            <Icon name="book" size={20} color="#FFF" />
		                            <LabelNamePet>
		                                Gatolina
		                            </LabelNamePet>
		                        </Row>

		                        <Row>
		                            <Icon name="paw" size={20} color="#FFF" />
		                            <LabelNamePet>
		                                6 anos
		                            </LabelNamePet>
		                        </Row>

		                        <Row>
		                            <Icon name="venus-mars" size={20} color="#FFF" />
		                            <LabelNamePet>
		                               Feminina
		                            </LabelNamePet>
		                        </Row>
		                    </ContentRow>

		                    <ButtonArrow> 
		                    	<Icon name="chevron-right" size={28} color="#FFF" />
		                    </ButtonArrow>
		                </ContentInfoPet>
		            </CardPet>
	            </ScrollView>
            </ContentCard>
		</Content>
	);	
}

const LabelButtonSelect = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
    text-align: center;
`;

const ButtonNavigateSelect = styled(TouchableOpacity)`
	padding: 10px;
	margin-top: 10px;
	background-color: #ffb300;
	border: 1px solid #ffb300;
	border-radius: 10px;
	align-content: center;
	width: 100%;
`;

const ContentButtonSelect = styled.View`
`;

const LabelTitleModal = styled.Text`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	color: #ffb300;
	margin-top: 5px;
`;

const ContentModal = styled.View`
	width: 100%;
	height: 280px;
	backgroundColor: #FFF;
	border: 1px solid #FFF;
	border-radius: 10px;
	padding: 5px;
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

const ButtonArrow = styled(TouchableOpacity)`
	padding: 8px;
	margin-right: 5px;
`;

const ContentCard = styled.View``;

const ContentInfoPet = styled.View`
    border: 1px solid #ffb300;
    border-radius: 30px;
    width: 70%;
    background-color: #ffb300;
    padding: 0px 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Row = styled.View`
    padding: 5px;
    flex-direction: row;
    align-content: center;
    align-items: center;
`;

const LabelNamePet = styled.Text`
    font-size: 17px;
    color: #FFF;
    margin-left: 10px;
`;

const LabelButton = styled.Text`
    font-size: 17px;
    color: #FFF;
`;

const ContentRow = styled.View`
`;

const ImgPet = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 100px;
`;

const ContentImage = styled.View`
    padding: 10px;
    align-items: center;
`;

const CardPet = styled(TouchableOpacity)`
    border: 1px solid #ffb300;
    border-radius: 30px;
    margin-top: 20px;
    flex-direction: row;
    margin: 20px 5px 0px 5px;
`;

const LabelSubTitle = styled.Text`
	font-size: 15px;
	margin: 5px;
	color: #FFF;
`;

const LabelTitleName = styled.Text`
	font-size: 21px;
	font-weight: 700;
	margin: 5px;
	color: #FFF;
`;

const ContentSerach = styled.View`
	border-bottom-right-radius: 20px;
	padding: 5px;
	background-color: #ffb300;
`;

const ItemSearch = styled(Item)`
	padding-left: 4px;
	border: 1px solid #d6a020;
	backgroundColor: #d6a020;
`;

const ContentInputSerach = styled.View`
	margin: 10px 0px;
`;

const Content = styled.View`
`;