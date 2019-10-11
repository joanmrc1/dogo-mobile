import React, { Component } from 'react';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styled from 'styled-components';
import NavigationService from '../../services/navigation';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    render() {
        const { email, password } = this.state;

        return (
            <Content>
                <ScrollView>
                    <ContentLogo>
                        <ImgLogo source={require('../../assets/img/logo.jpeg')} />
                    </ContentLogo>

                    <ContentCard>
                        <CardLogin>
                            <LabelTitleCard>
                                Olá
                        </LabelTitleCard>
                            <LabelSubTitleCard>
                                faça login para continuar
                        </LabelSubTitleCard>
                            <ContentForm>
                                <InputData
                                    placeholder="E-mail"
                                    value={email}
                                    onChangeText={text => this.setState({ email: text })}
                                />

                                <InputData
                                    placeholder="Senha"
                                    value={password}
                                    onChangeText={text => this.setState({ password: text })}
                                />
                            </ContentForm>

                            <ButtonLogin>
                                <LabelButtonLogin> Acessar </LabelButtonLogin>
                            </ButtonLogin>

                            <ButtonFogotPassword>
                                <LabelFogotPassword> Esqueceu a senha ? </LabelFogotPassword>
                            </ButtonFogotPassword>
                        </CardLogin>

                        <ButtonFogotPassword>
                            <LabelFogotPassword> Não tem conta ? Cadastre-se </LabelFogotPassword>
                        </ButtonFogotPassword>
                    </ContentCard>
                </ScrollView>
            </Content>
        );
    }
}

const ButtonFogotPassword = styled(TouchableOpacity)`
    padding: 10px;
    flex-direction: row;
    justify-content: center;
`;

const LabelFogotPassword = styled.Text`
    color: #a9a9a9;
    font-weight: 700;
    font-size: 14px;
    margin-top: 17px;
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
    height: 420px;
    width: 270px;
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
    height: 40%;
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

export default Login;