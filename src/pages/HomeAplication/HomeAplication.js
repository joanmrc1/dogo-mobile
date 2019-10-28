import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeAplication extends Component {

    render() {
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

                <CardRadius>
                    <ContentButtonLocation>
                        <ButtonLocation>
                            <Icon name="map-marker" size={28} color="#FFF" />
                            <LabelButton> Meus Pets </LabelButton>
                        </ButtonLocation>
                    </ContentButtonLocation>

                    <ContentButtonLocation>
                        <ButtonLocation>
                            <Icon name="map-marker" size={28} color="#FFF" />
                            <LabelButton> Adicioar novo Pet </LabelButton>
                        </ButtonLocation>
                    </ContentButtonLocation>
                </CardRadius>

                {/* <ContentLabelInfo>
                    <LabelInfo> Informações do pet </LabelInfo>
                </ContentLabelInfo>

                <ContentInfoPet>
                    <Row>
                        <Icon name="star" size={30} color="#ffb300" />
                        <LabelDateInfo> 10/09/2019 (19 anos) </LabelDateInfo>
                    </Row>

                    <Row>
                        <Icon name="birthday-cake" size={30} color="#ffb300" />
                        <LabelBirthday> Faltam 2 dias para o aniversário </LabelBirthday>
                    </Row>

                    <Row>
                        <Icon name="heartbeat" size={30} color="#ffb300" />
                        <LabelLastConsultation> Utilma consulta 09/09/2019 </LabelLastConsultation>
                    </Row>
                </ContentInfoPet> */}
            </Content>
        );
    }
}

const CardRadiusTop = styled.View`
    border: 1px solid #ffb300;
    background-color: #ffb300;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

const CardRadius = styled.View`
    border: 1px solid white;
    height: 100%;
    background-color: white;
    border-radius: 30px;
`;

const LabelLastConsultation = styled.Text`
    width: 100%;
    font-size: 20px;
    color: #a9a9a9;
    border-bottom-color: #e8e8e8;
    border-bottom-width: 1px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border: solid;
    padding: 5px;
    margin-left: 5px;
`;

const LabelBirthday = styled.Text`
    font-size: 20px;
    margin-left: 5px;
    color: #a9a9a9;
    border-bottom-color: #e8e8e8;
    border-bottom-width: 1px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border: solid;
    padding: 5px;
`;

const LabelDateInfo = styled.Text`
    padding: 5px;
    margin-left: 5px;
    font-size: 20px;
    color: #a9a9a9;
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
    width: 250px;
    align-content: center;
    align-items: center;
    border: 1px solid transparent;
    /* border: 1px solid red; */
`;

const ContentInfoPet = styled.View`
    align-items: center;
    margin-top: 15px;
    width: 100%;
    align-items: center;
    align-content: center;
    /* border: 1px solid red; */
    justify-content: space-between;
`;

const LabelInfo = styled.Text`
    font-size: 20px;
    color: #ffb300;
    font-weight: bold;
`;

const ContentLabelInfo = styled.View`
    margin-top: 30px;
    padding: 10px;
    width: 100%;
    align-items: center;
`;

const LabelButton = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 19px;
`;

const ButtonLocation = styled(TouchableOpacity)`
    border-radius: 15px;
    border: 1px solid #ffb300;
    height: 55px;
    background-color: #ffb300;
    elevation: 15;
    padding: 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    /* width: 180px; */
    margin-top: 20px;
`;

const ContentButtonLocation = styled.View`
    flex-direction: column;
    align-items: center;
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
    margin-top: 20px;
`;

const ImgUser = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 100px;
    margin-top: 10px;
`;

const ContentImage = styled.View`
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

const Content = styled.View`
    height: 100%;
    width: 100%;
`;

export default HomeAplication;