import React, {useState, useEffect} from 'react';
import {TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import NavigationService from '../../services/navigation';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login() {
  const error = useSelector(state => state.login.error);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('joanmrc96@gmail.com');
  const [password, setPassword] = useState('123456');
  const [showPass, setShowPass] = useState('false');

  useEffect(() => {
    console.tron.log(error);
  }, [error]);

  function submitLogin() {
    dispatch({type: 'ASYNC_LOGIN', payload: {email, password}});
  }

  function logout() {
    AsyncStorage.removeItem('@DogoApp:token');
    AsyncStorage.removeItem('@DogoApp:user');
    NavigationService.navigate('Login');
  }

  return (
    <ScrollView>
      <Content>
        <ContentLogo>
          <ImgLogo source={require('../../assets/img/logo.png')} />
        </ContentLogo>

        <ContentCard>
          <CardLogin>
            <Welcome>
              <LabelTitleCard>Olá,</LabelTitleCard>
              <LabelSubTitleCard>faça login para continuar</LabelSubTitleCard>
            </Welcome>
            {error !== true ? <LabelError>{error}</LabelError> : null}

            <ContentForm>
              <InputData
                placeholder="E-mail"
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <FormIcon>
                <InputPass
                  secureTextEntry={showPass ? true : false}
                  placeholder="Senha"
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                  <CustomIcon
                    name={showPass ? 'eye' : 'eye-slash'}
                    color={'#000'}
                    size={20}
                  />
                </TouchableOpacity>
              </FormIcon>
            </ContentForm>

            <ButtonLogin onPress={submitLogin}>
              <LabelButtonLogin> Acessar </LabelButtonLogin>
            </ButtonLogin>

            <ButtonFogotPassword onPress={logout}>
              <LabelFogotPassword> Esqueceu a senha ? </LabelFogotPassword>
            </ButtonFogotPassword>
          </CardLogin>

          <ButtonFogotPassword
            onPress={() => NavigationService.navigate('Inicio')}>
            <LabelRegister> Não tem conta? Cadastre-se </LabelRegister>
          </ButtonFogotPassword>
        </ContentCard>
      </Content>
    </ScrollView>
  );
}

const Welcome = styled.View`
  width: 100%;
  padding: 0px 20px;
  align-items: flex-start;
`;

const LabelError = styled.Text`
  color: red;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const ButtonFogotPassword = styled(TouchableOpacity)`
  padding: 10px;
  flex-direction: row;
  justify-content: center;
`;

const LabelFogotPassword = styled.Text`
  color: #076775;
  font-weight: 700;
  font-size: 14px;
  margin-top: 10px;
`;

const LabelRegister = styled.Text`
  color: #076775;
  font-weight: 700;
  font-size: 14px;
  margin-top: 26px;
`;

const LabelButtonLogin = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 17px;
`;

const ButtonLogin = styled(TouchableOpacity)`
  border-radius: 20px;
  border: 1px solid #08d2ce;
  height: 45px;
  background-color: #08d2ce;
  elevation: 7;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 210px;
  margin-top: 20px;
`;

const CustomIcon = styled(Icon)`
  color: ${props => props.color};
  font-size: ${props => props.size};
  padding: 14px;
`;

const FormIcon = styled.View`
  border: 1px solid #e3e3e3;
  flex-direction: row;
  margin-top: 15px;
`;

const InputData = styled(TextInput)`
  border: 1px solid #e3e3e3;
  margin-top: 15px;
  padding-left: 15px;
  width: 100%;
`;

const InputPass = styled(TextInput)`
  width: 82%;
  padding-left: 15px;
  color: #000;
`;

const ContentForm = styled.View`
  flex-direction: column;
  padding: 15px;
  width: 100%;
`;

const LabelSubTitleCard = styled.Text`
  color: #08d2ce;
  font-size: 20;
  font-weight: bold;
  text-align: center;
  padding: 5px;
`;

const LabelTitleCard = styled.Text`
  color: #076775;
  font-size: 37;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  margin-top: 20px;
`;

const CardLogin = styled.View`
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid white;
  background-color: white;
  align-items: center;
  height: 430px;
  width: 300px;
  margin-top: 100px;
  elevation: 1;
`;

const ContentCard = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ContentLogo = styled.View`
  height: 260px;
  width: 100%;
  background-color: #08d2ce;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ImgLogo = styled.Image`
  height: 50px;
  width: 150px;
  margin-top: 40px;
`;

const Content = styled.View`
  height: 100%;
  width: 100%;
`;
