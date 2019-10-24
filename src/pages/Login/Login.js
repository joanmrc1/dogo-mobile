import React, { useState, useEffect } from 'react';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavigationService from '../../services/navigation';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login() {
    const error = useSelector(state => state.login.error);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('joanmrc96@gmail.com');
    const [password, setPassword] = useState('123456');

    useEffect(() => {
        console.tron.log(error);
    }, []);

    function submitLogin() {
        dispatch({ type: 'ASYNC_LOGIN', payload: { email, password } });
    }

    function logout() {
        AsyncStorage.removeItem("@DogoApp:token");
        AsyncStorage.removeItem("@DogoApp:user");
        NavigationService.navigate("Login");
    }

    return (
        <ScrollView>
            <Content>
                <ContentLogo>
                    <ImgLogo source={require('../../assets/img/logo.png')} />
                </ContentLogo>

                <ContentCard>
                    <CardLogin>
                        <LabelTitleCard>
                            Olá
                        </LabelTitleCard>

                        <LabelSubTitleCard>
                            faça login para continuar
                        </LabelSubTitleCard>

                        {error !== true ? (<LabelError>{error}</LabelError>) : null}

                        <ContentForm>
                            <InputData
                                placeholder="E-mail"
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />

                            <InputData
                                secureTextEntry
                                placeholder="Senha"
                                value={password}
                                onChangeText={text => setPassword(text)}
                            />
                        </ContentForm>

                        <ButtonLogin onPress={submitLogin}>
                            <LabelButtonLogin> Acessar </LabelButtonLogin>
                        </ButtonLogin>

                        <ButtonFogotPassword onPress={logout}>
                            <LabelFogotPassword> Esqueceu a senha ? </LabelFogotPassword>
                        </ButtonFogotPassword>
                    </CardLogin>

                    <ButtonFogotPassword onPress={() => NavigationService.navigate('Register')}>
                        <LabelRegister> Não tem conta ? Cadastre-se </LabelRegister>
                    </ButtonFogotPassword>
                </ContentCard>
            </Content>
        </ScrollView>
    );
}

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
    color: #a9a9a9;
    font-weight: 700;
    font-size: 14px;
    margin-top: 10px;
`;

const LabelRegister = styled.Text`
    color: #a9a9a9;
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
    border: 1px solid #ffb300;
    height: 45px;
    background-color: #ffb300;
    elevation: 11;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 210px;
    margin-top: 20px;
`;

const InputData = styled(TextInput)`
    border: 1px solid #e3e3e3;
    margin-top: 15px;
    padding-left: 15px;
    width: 100%;
`;

const ContentForm = styled.View`
    flex-direction: column;
    padding: 15px;
    width: 100%;
`;

const LabelSubTitleCard = styled.Text`
    color: #c8c8c8;
    font-size: 20;
    font-weight: bold;
    text-align: center;
    padding: 5px;
`;

const LabelTitleCard = styled.Text`
    color: #ffb300;
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
    background-color: #ffb300;
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