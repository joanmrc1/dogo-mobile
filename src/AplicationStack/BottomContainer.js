import React, {Component} from 'react';
import {Button, Footer, FooterTab} from 'native-base';

import styled from 'styled-components/native';
import NavigationService from '../services/navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class BottomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.tron.log(this.props);
  }

  render() {
    return (
      <Footer>
        <FooterTab
          style={{
            backgroundColor: '#fff',
          }}>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('HomeAplication')}>
            <MenuIcon name="home" size={20} solid />
            <BottomText>Início</BottomText>
          </Button>

          <Button
            vertical
            onPress={() => this.props.navigation.navigate('Pets')}>
            <MenuIcon name="notes-medical" size={20} solid />
            <BottomText>Main</BottomText>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const BottomText = styled.Text`
  font-family: Montserrat-Regular;
  color: #000;
  font-size: 14px;
`;

const MenuIcon = styled(Icon)`
  color: #000;
`;
