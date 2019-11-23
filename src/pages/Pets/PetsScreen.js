import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import api from '~/services/api';
import { useSelector } from 'react-redux';
import {Item, Input} from 'native-base';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NavigationService from '../../services/navigation';
import Modal from 'react-native-modal';
import ActionButton from 'react-native-action-button';
import { FAB } from 'react-native-paper';

export default function PetsScreen() {
  const user = useSelector(state => state.user.user);
  const pets = useSelector(state => state.pet.pets);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function setFilter(query) {
    setSearch(query);
    
    let result = pets.filter((el) => {
      return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }

  function getIdade(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),

    ano_aniversario = +ano_aniversario,
    mes_aniversario = +mes_aniversario,
    dia_aniversario = +dia_aniversario,

    quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
      quantos_anos--; 
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
  }

  return (
    <>
    <ScrollView>
      <Content>
        <ContentSerach>
          <LabelTitleName>
            Olá, <Text style={{color: '#076775'}}>{user.name}</Text>
          </LabelTitleName>

          <LabelSubTitle> Listagem de todos os seus queridos pets </LabelSubTitle>
          <ContentInputSerach>
            <ItemSearch>
              <Icon active name="search" size={25} color={'#076775'} />
              <Input 
                placeholder="Nome do seu pet"
                value={search}
                onChangeText={(value) => setFilter(value)}
              />
            </ItemSearch>
          </ContentInputSerach>
        </ContentSerach>

        <ContentCard>
            {
              pets.length ?
                pets.map((pet) => {
                  return (
                    <CardPet 
                      onPress={() => NavigationService.navigate('PetProfile', {
                        pet
                      })} 
                      key={pet.id}
                    >
                      <ContentImage>
                        <ImgPet source={require('../../assets/img/rag_modelo.jpeg')} />
                      </ContentImage>
                      <ContentInfoPet>
                        <ContentRow>
                          <Row>
                            <Icon name="book" size={20} color="#FFF" />
                            <LabelNamePet> {pet.name} </LabelNamePet>
                          </Row>

                          <Row>
                            <Icon name="paw" size={20} color="#FFF" />
                            <LabelNamePet>
                              {
                                getIdade(
                                  parseInt(pet.birthday.split('/')[2]), 
                                  parseInt(pet.birthday.split('/')[1]), 
                                  parseInt(pet.birthday.split('/')[0])
                                )
                              } anos
                            </LabelNamePet>
                          </Row>

                          <Row>
                            <Icon name="venus-mars" size={20} color="#FFF" />
                            <LabelNamePet>{pet.gender}</LabelNamePet>
                          </Row>
                        </ContentRow>

                        <ButtonArrow>
                          <Icon name="chevron-right" size={28} color="#FFF" />
                        </ButtonArrow>
                      </ContentInfoPet>
                    </CardPet>
                  )
                }) : <NoResultText>Não há pets registradas ainda</NoResultText> 
            }
        </ContentCard>
      </Content>
    </ScrollView>
    <FAB
      style={styles.fab}
      icon="paw"
      onPress={() => NavigationService.navigate('RegisterPet')}
    />
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 75,
    padding: 2,
    backgroundColor: '#5c5cce'
  },
})

const NoResultText = styled.Text`
  padding: 20px 20px;
  text-align: center;
`;

const IconActionButton = styled(Icon)`
  font-size: 20px;
  height: 22px;
  color: #FFF;
`;

const ContentFloatButton = styled.View`
  margin-bottom: 31px;
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
  alignItems: center;
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
