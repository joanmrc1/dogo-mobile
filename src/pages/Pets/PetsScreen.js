import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import {Item, Input} from 'native-base';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavigationService from '../../services/navigation';
import Modal from 'react-native-modal';
import ActionButton from 'react-native-action-button';

export default function PetsScreen() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  function handlewNavigatePress(route) {
    setIsVisibleModal(false);
    NavigationService.navigate(route);
  }

  const ModalNavigate = () => {
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight =
      Platform.OS === 'ios'
        ? Dimensions.get('window').height
        : require('react-native-extra-dimensions-android').get(
            'REAL_WINDOW_HEIGHT',
          );

    return (
      <Modal
        isVisible={isVisibleModal}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        onBackdropPress={() => setIsVisibleModal(false)}>
        <ContentModal>
          <LabelTitleModal>Selecione a Informação</LabelTitleModal>
          <ContentButtonSelect>
            <Row>
              <ButtonNavigateSelect
                onPress={() => handlewNavigatePress('Vermifugation')}>
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
    );
  };

  return (
    <>
    <Content>
      <ModalNavigate />

      <ContentSerach>
        <LabelTitleName>
          Olá, <Text style={{color: '#076775'}}>Joan Marcos</Text>
        </LabelTitleName>

        <LabelSubTitle> Listagem de todos os seus queridos pets </LabelSubTitle>
        <ContentInputSerach>
          <ItemSearch>
            <Icon active name="search" size={25} color={'#076775'} />
            <Input placeholder="Nome do seu pet" />
          </ItemSearch>
        </ContentInputSerach>
      </ContentSerach>

      <ContentCard>
        <ScrollView>
          <CardPet onPress={() => NavigationService.navigate('PetProfile')}>
            <ContentImage>
              <ImgPet source={require('../../assets/img/rag_modelo.jpeg')} />
            </ContentImage>
            <ContentInfoPet>
              <ContentRow>
                <Row>
                  <Icon name="book" size={20} color="#FFF" />
                  <LabelNamePet>Ragnar Lord</LabelNamePet>
                </Row>

                <Row>
                  <Icon name="paw" size={20} color="#FFF" />
                  <LabelNamePet>10 anos</LabelNamePet>
                </Row>

                <Row>
                  <Icon name="venus-mars" size={20} color="#FFF" />
                  <LabelNamePet>Masculino</LabelNamePet>
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
                  <LabelNamePet>Gatolina</LabelNamePet>
                </Row>

                <Row>
                  <Icon name="paw" size={20} color="#FFF" />
                  <LabelNamePet>6 anos</LabelNamePet>
                </Row>

                <Row>
                  <Icon name="venus-mars" size={20} color="#FFF" />
                  <LabelNamePet>Feminina</LabelNamePet>
                </Row>
              </ContentRow>

              <ButtonArrow>
                <Icon name="chevron-right" size={28} color="#FFF" />
              </ButtonArrow>
            </ContentInfoPet>
          </CardPet>
        </ScrollView>
      </ContentCard>
      <ContentFloatButton>
        <ActionButton buttonColor="#3498db">

          <ActionButton.Item 
            buttonColor='#d9dc29'
            title="Pet"
            onPress={() => NavigationService.navigate('RegisterPet')}
          >
            <IconActionButton name="paw" />
          </ActionButton.Item>

        </ActionButton>
      </ContentFloatButton>

    </Content>
    </>
  );
}

const IconActionButton = styled(Icon)`
  font-size: 20px;
  height: 22px;
  color: #FFF;
`;

const ContentFloatButton = styled.View`
  margin-bottom: 35px;
  flex: 1;
  zIndex: 1;
`;

const LabelButtonSelect = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

const ButtonNavigateSelect = styled(TouchableOpacity)`
  padding: 10px;
  margin-top: 10px;
  background-color: #08d2ce;
  border: 1px solid #08d2ce;
  border-radius: 10px;
  align-content: center;
  width: 100%;
`;

const ContentButtonSelect = styled.View``;

const LabelTitleModal = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #08d2ce;
  margin-top: 5px;
`;

const ContentModal = styled.View`
  width: 100%;
  height: 280px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 5px;
`;

const ButtonAddPet = styled(TouchableOpacity)`
  padding: 8px;
  border: 1px solid red;
  margin-top: 10px;
  background-color: #08d2ce;
  border: 1px solid #08d2ce;
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
  border: 1px solid #08d2ce;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 70%;
  background-color: #08d2ce;
  padding: 0px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const Row = styled.View`
  padding: 5px;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

const LabelNamePet = styled.Text`
  font-size: 17px;
  color: #fff;
  margin-left: 10px;
`;

const LabelButton = styled.Text`
  font-size: 17px;
  color: #fff;
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
  background: #d7fffb;
  border-radius: 30px;
  margin-top: 20px;
  flex-direction: row;
  padding: 0px 20px;
`;

const LabelSubTitle = styled.Text`
  font-size: 15px;
  margin: 5px;
  color: #fff;
`;

const LabelTitleName = styled.Text`
  font-size: 21px;
  font-weight: 700;
  margin: 5px;
  color: #fff;
`;

const ContentSerach = styled.View`
  padding: 5px;
  background-color: #08d2ce;
`;

const ItemSearch = styled(Item)`
  padding: 0px 15px;
  border: 1px solid white;
  background-color: white;
  border-radius: 10px;
`;

const ContentInputSerach = styled.View`
  margin: 10px 0px;
`;

const Content = styled.View`
  flex: 1;
`;
