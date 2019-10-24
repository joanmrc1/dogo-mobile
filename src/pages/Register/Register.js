import React, { useState, useEffect} from 'react';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavigationService from '../../services/navigation';

export default function Register() {
    const error = useSelector(state => state.register.error);
    const dispatch = useDispatch();

    const [name, setName] = useState('joan');
    const [birthday, setBirthday] = useState('27/10/1996');
    const [email, setEmail] = useState('joanmrc96@gmail.com');
    const [password, setPassword] = useState('123456');
    const [confirmPassword, setConfirmPassword] = useState('123457');

    useEffect(() => {
        console.tron.log(error)
    }, []);

    function submitRegister() {
        if(!validateForm()) return;

        const body = {
            name,
            birthday,
            email,
            password,
        };

        dispatch({ type: 'ASYNC_REGISTER', payload: body });
    }

    function validateForm() {
        console.tron.log('opa');
        if (password !== confirmPassword) {
            dispatch({ 
                type: 'ERROR_REGISTER', 
                message: 'senha e confirma senha estão diferentes.'
            });

            return false;
        }
    }

    return (
        <Content>
            <ScrollView>
                <ContentLogo>
                    <ImgLogo source={require('../../assets/img/logo.png')} />
                </ContentLogo>

                <ContentCard>
                    <CardLogin>
                        <ContentTitle>
                            <LabelTitleCard>
                                Olá, preencha os campos
                            </LabelTitleCard>
                            <LabelSubTitleCard>
                                com seus dados
                            </LabelSubTitleCard>
                        </ContentTitle>
                        {error !== true ? (<LabelError>{error}</LabelError>) : null}
                        <ContentForm>
                            <InputData
                                placeholder="Nome"
                                value={name}
                                onChangeText={text => setName(text)}
                            />

                            <InputData
                                placeholder="Data de Nascimento"
                                value={birthday}
                                onChangeText={text => setBirthday(text)}
                            />

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

                            <InputData
                                secureTextEntry
                                placeholder="Comfirma senha"
                                value={confirmPassword}
                                onChangeText={text => setConfirmPassword(text)}
                            />
                        </ContentForm>
                        
                        <ContentButton>
                            <ButtonSubmit onPress={submitRegister}>
                                <LabelButtonLogin> Cadastrar </LabelButtonLogin>
                            </ButtonSubmit>
                        </ContentButton>

                    </CardLogin>

                    <ButtonBackLogin onPress={() => NavigationService.navigate('Login')}>
                        <LabelFogotPassword> Já tem uma conta ? Faça login </LabelFogotPassword>
                    </ButtonBackLogin>

                </ContentCard>
            </ScrollView>
        </Content>
    );
}

const LabelError = styled.Text`
    color: red;
    font-size: 19px;
    font-weight: bold;
`;

const ContentButton = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

const ButtonBackLogin = styled(TouchableOpacity)`
    padding: 0px 10px 10px 10px;
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

const ButtonSubmit = styled(TouchableOpacity)`
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
`;

const InputData = styled(TextInput)`
    border: 1px solid #e3e3e3;
    margin-top: 15px;
    padding-left: 15px;
    width: 100%;
    height: 40px;
`;

const ContentForm = styled.View`
    flex-direction: column;
    padding: 0px 15px 15px 15px;
    width: 100%;
    align-items: center;
`;

const ContentTitle = styled.View`
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
`;

const LabelSubTitleCard = styled.Text`
    color: #c8c8c8;
    font-size: 16;
    font-weight: bold;
    text-align: left;
    margin-left: 10px;
`;

const LabelTitleCard = styled.Text`
    color: #ffb300;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    margin-left: 10px;
`;

const CardLogin = styled.View`
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid white;
    background-color: white;
    height: 450px;
    width: 300px;
    margin-top: 100px;
    elevation: 1;
`

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
