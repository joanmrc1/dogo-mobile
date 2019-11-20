import React from 'react';
import {ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import Lottie from 'lottie-react-native';

import animDog from '../../assets/animations/dog.json';
import animCat from '../../assets/animations/cat.json';

export default function Loading(props) {
  const returnAnim = () => {
    const num = Math.floor(Math.random() * 2);

    if (num === 0) {
      return animCat;
    }

    if (num === 1) {
      return animDog;
    }
  };

  return (
    <Modal isVisible={props.isOpen}>
      <Body>
        <AnimPet source={returnAnim()} autoPlay loop />
        <Message>{props.message}</Message>
        <ActivityIndicator size="large" color="white" />
      </Body>
    </Modal>
  );
}

const Body = styled.View`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

const AnimPet = styled(Lottie)`
  width: 85%;
`;

const Message = styled.Text`
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
`;
