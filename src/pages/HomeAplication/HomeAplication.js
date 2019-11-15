import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeAplication() {
  return (
    <Content>
      <CardRadiusTop>
        <ContentImage>
          <ImgUser source={require('../../assets/img/userimg.jpg')} />
        </ContentImage>

        <ContentTitle>
          <LabelTitleCard> Bem Vindo, Joan Marcos </LabelTitleCard>
        </ContentTitle>
      </CardRadiusTop>

      <Card>
        <CardContentInfoPet>
          <ContentLabelInfo>
            <Icon name="gratipay" size={20} color="#08d2ce" />
            <LabelInfo> Informações do pet </LabelInfo>
          </ContentLabelInfo>

          <CardInfoPets>
            <Row>
              <Icon name="heart" size={20} color="#08d2ce" />
              <LabelBirthday> Você tem 2 pets </LabelBirthday>
            </Row>
          </CardInfoPets>

          <CardInfoPets>
            <Row>
              <Icon name="heartbeat" size={20} color="#08d2ce" />
              <LabelLastConsultation>
                Ultima consulta 09/09/2019
              </LabelLastConsultation>
            </Row>
          </CardInfoPets>
        </CardContentInfoPet>

        <CardPet>
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
            <IconStar>
              <Icon name="star" size={20} color="#FFF" />
            </IconStar>
          </ContentInfoPet>
        </CardPet>
      </Card>
    </Content>
  );
}

const ContentRow = styled.View``;

const IconStar = styled.View`
  padding: 5px;
`;

const LabelNamePet = styled.Text`
  font-size: 17px;
  color: #076775;
  margin-left: 10px;
`;

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

const CardPet = styled(TouchableOpacity)`
  background: #d7fffb;
  border-radius: 30px;
  margin-top: 20px;
  flex-direction: row;
  padding: 0px 20px;
`;

const CardContentInfoPet = styled.View`
  margin-top: 10px;
`;

const CardInfoPets = styled.View`
  background: #d7fffb;
  border-radius: 30px;
  margin-top: 10px;
  padding: 5px 20px;
`;

const CardRadiusTop = styled.View`
  border: 1px solid #08d2ce;
  background-color: #08d2ce;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const Card = styled.View`
  border: 1px solid white;
  height: 100%;
  background-color: white;
  border-radius: 30px;
  padding: 5px;
`;

const LabelLastConsultation = styled.Text`
  width: 100%;
  font-size: 16px;
  color: #076775;
  padding: 5px;
  margin-left: 5px;
`;

const LabelBirthday = styled.Text`
  font-size: 16px;
  margin-left: 5px;
  color: #076775;
  padding: 5px;
`;

const LabelDateInfo = styled.Text`
  padding: 5px;
  margin-left: 5px;
  font-size: 16px;
  color: #076775;
  border-bottom-color: #e8e8e8;
  border-bottom-width: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border: solid;
`;

const Row = styled.View`
  padding: 5px;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

const LabelInfo = styled.Text`
  font-size: 20px;
  color: #076775;
  font-weight: bold;
`;

const ContentLabelInfo = styled.View`
  margin: 5px 0px;
  padding: 10px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const LabelButton = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 19px;
  margin-right: 5px;
  margin-left: 5px;
`;

const ButtonLocation = styled(TouchableOpacity)`
  border-radius: 15px;
  border: 1px solid #08d2ce;
  height: 55px;
  background-color: #08d2ce;
  elevation: 15;
  padding: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  /* width: 180px; */
  margin-top: 20px;
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

const ImgPet = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 100px;
`;

const ContentImage = styled.View`
  padding: 10px;
  align-items: center;
`;

const Content = styled.View`
  height: 100%;
  width: 100%;
`;
