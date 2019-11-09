import React, {useState} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import NavigationService from '../../services/navigation';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home() {
  useState(async () => {
    const token = await AsyncStorage.getItem('@DogoApp:token');

    if (token !== null) {
      NavigationService.navigate('HomeAplication');
    }
  }, []);
  return (
    <ImageBackground
      source={require('../../assets/img/newbg.png')}
      style={{width: '100%', height: '100%'}}>
      <Content>
        <ContentLogo>
          <ImgLogo source={require('../../assets/img/logo.png')} />
          <LabelLogo>Você mais próximo do seu dog</LabelLogo>
        </ContentLogo>

        <ContentButtons>
          <ButtonLogin onPress={() => NavigationService.navigate('Login')}>
            <LabelButton> Fazer Login </LabelButton>
          </ButtonLogin>
          <ButtonLRegister
            onPress={() => NavigationService.navigate('Register')}>
            <LabelButton> Cadastra-se </LabelButton>
          </ButtonLRegister>
        </ContentButtons>
      </Content>
    </ImageBackground>
  );
}

const ButtonLRegister = styled(TouchableOpacity)`
  padding: 10px;
  flex-direction: row;
  justify-content: center;
`;

const LabelButton = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 19px;
`;

const ButtonLogin = styled(TouchableOpacity)`
  border-radius: 10px;
  border: 1px solid #08d2ce;
  height: 50px;
  background-color: #08d2ce;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  width: 140px;
`;

const ContentButtons = styled.View`
  height: 100px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const LabelLogo = styled.Text`
  color: white;
  font-style: italic;
  font-weight: 700;
  font-size: 17px;
`;

const ContentLogo = styled.View`
  height: 100px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const ImgLogo = styled.Image`
  height: 50px;
  width: 150px;
  margin-top: 20px;
`;

const Content = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
