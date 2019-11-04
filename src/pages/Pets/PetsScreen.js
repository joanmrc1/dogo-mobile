import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

function PetsScreen() {
  return (
    <Content>
      <CardRadiusTop>
        <ContentTitle>
          <LabelTitleCard color="#fff"> 🐱 Listagem de Pets 🐶</LabelTitleCard>
        </ContentTitle>
        {/* <ContentImage>
          <ImgUser source={require('../../assets/img/userimg.jpg')} />
        </ContentImage> */}
      </CardRadiusTop>
      <CardRadius>
        <CardItem>
          <HalfCardItem>
            <ContentImage>
              <ImgUser source={require('../../assets/img/userimg.jpg')} />
            </ContentImage>
            <ContentTitle>
              <LabelTitleCard color="#fff">Meu gato</LabelTitleCard>
            </ContentTitle>
          </HalfCardItem>
          <TouchableOpacity>
            <CustomIcon name={'chevron-right'} color={'#fff'} size={25} />
          </TouchableOpacity>
        </CardItem>
      </CardRadius>
    </Content>
  );
}

const CardRadiusTop = styled.View`
  border: 1px solid #ffb300;
  background-color: #ffb300;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const CustomIcon = styled(Icon)`
  color: ${props => props.color};
  font-size: ${props => props.size};
  padding: 45px 0;
`;

const HalfCardItem = styled.View`
  width: 90%;
  flex-direction: row;
`;

const CardItem = styled.View`
  flex-direction: row;
  width: 88%;
  margin: 20px;
  border-radius: 50px;
  elevation: 4;
  background: #ffb300;
`;

const CardRadius = styled.View`
  border: 1px solid white;
  height: 100%;
  background-color: white;
  border-radius: 30px;
`;

const ImgUser = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  /* margin-top: 10px; */
`;

const ContentImage = styled.View`
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const Content = styled.View`
  height: 100%;
  width: 100%;
`;

const ContentTitle = styled.View`
  flex-direction: column;
  align-items: center;
`;

const LabelTitleCard = styled.Text`
  color: ${props => props.color};
  font-size: 25;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  margin: 5px 0 20px 0;
`;

export default PetsScreen;
