import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Item, Input, Label, Row, Picker} from 'native-base';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../../../services/navigation';
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { momentePtBr } from '../../../services/utils';
import Loading from '../../Loading/Loading';

export default function RegisterPet({ navigation }) {

  useEffect(() => {

    if(navigation.getParam('pet')) setValuesUpdateDate(navigation.getParam('pet'));

  }, [])

  const [pet, setPet] = useState('asd')
  const [name, setName] = useState('asd');
  const [gender, setGender] = useState('Macho');
  const [breed, setBreed] = useState('asd');
  const [species, setSpecies] = useState('asd');
  const [fur, setFur] = useState('asd');
  const [veterinary, setVeterinary] = useState('asd');
  const [preview, setPreview] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [date, setDate] = useState(Date.now());
  const [id, setId] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [birthday, setBirthday] = useState('Data de niver');
  const [modalVisible, setModalVisible] = useState(false);
  const oldPets = useSelector(state => state.pet.pets);
  const dispatch = useDispatch();

  function setValuesUpdateDate(data) {
    console.tron.log(data.id);
    setName(data.name || '')
    setGender(data.gender || '')
    setBreed(data.breed || '')
    setSpecies(data.species || '')
    setFur(data.fur || '')
    setVeterinary(data.veterinary || '')
    setBirthday(data.birthday || '')
    setId(data.id || null)
  }

  function handleSelectImage() {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
        takePhotoButtonTitle: 'Tire uma foto',
        chooseFromLibraryButtonTitle: 'Escolha uma foto da galeria',
        cancelButtonTitle: 'Cancelar',
      },
      upload => {
        if (upload.error) {
        } else if (upload.didCancel) {
        } else {
          const previewImage = {
            uri: `data:image/jpeg;base64,${upload.data}`,
          };

          let prefix;
          let ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split('.');
            ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
          } else {
            prefix = new Date().getTime();
            ext = 'jpg';
          }

          const image = {
            uri: upload.uri,
            type: upload.type,
            name: `${prefix}.${ext}`,
          };

          setPreview(previewImage);
          setAvatar(image);
        }
      },
    );
  }

  async function setValueDate(e, obj) {
    momentePtBr();

    const formatedDate = moment(obj)
      .locale('pt-br')
      .format('DD/MM/YYYY')
      .toString();

    setShowDate(false);
    setBirthday(formatedDate);
  }

  async function handleSelectSubmit() {
    await setModalVisible(true);

    if (navigation.getParam('pet')) { 
      await handleUpdate(); 

      return;
    }

    await handleSubmit();
  }

  async function handleSubmit() {
    const newPets = [{ id: Math.random(), name, gender, breed, species, fur, veterinary, avatar, birthday }]

    const pets = await [...oldPets, ...newPets];

    await dispatch({type: 'SET_PETS', pets });

    setTimeout( function() {
      setModalVisible(false);
      NavigationService.navigate('Pets');
    }, 2500);
  }

  async function handleUpdate() {
    const newPets = [{ id, name, gender, breed, species, fur, veterinary, avatar, birthday }]

    const index = oldPets.map(function(e) { return e.id; }).indexOf(id);

    if (index >= 0) {
      await oldPets.splice(index, 1);

      const pets = [...oldPets, ...newPets];

      await dispatch({type: 'SET_PETS', pets });

      setTimeout( function() {
        setModalVisible(false);
        NavigationService.navigate('Pets');
      }, 2500);
    }
  }

  return (
    <Content>
      <Loading message={navigation.getParam('pet') ? 'Atualizando' : 'Cadastrando'} isOpen={modalVisible} />

      <ContentForm>
        <ScrollView>
          <ContentImage>
            { !preview &&
              <TouchableOpacity
                onPress={handleSelectImage}>
                <Text>Selecionar imagem</Text>
              </TouchableOpacity>
            }

            { preview && 
              <TouchableOpacity
                onPress={handleSelectImage}
              > 
                <ImgPet source={preview} />
              </TouchableOpacity>
            }
          </ContentImage>

          <ItemRow rounded>
            <Icon active name="book" size={25} color='#08d2ce' />
            <InputItem
              placeholder="Meu Nome ex: Ragnar Lord*"
              value={name}
              onChangeText={value => setName(value)}
            />

          </ItemRow>

          <ItemRow>
            <Icon active name="venus-mars" size={25} color='#08d2ce' />
            <Select
              note
              mode="dropdown"
              selectedValue={gender}
              onValueChange={(value) => setGender(value)}
            >
              <ItemSelect label="Selecione o Sexo"/>
              <ItemSelect label="Macho" value="Macho" />
              <ItemSelect label="Fêmea" value="Femia" />
            </Select>
          </ItemRow>

          <ItemRow rounded>
            <Icon active name="paw" size={25} color={'#08d2ce'} />
            <InputItem placeholder="Raça ex: Poodle, Siamês *..." 
              value={breed}
              onChangeText={value => setBreed(value)}
            />
          </ItemRow>

          <ItemRow rounded>
            <Icon active name="paw" size={25} color={'#08d2ce'} />
            <InputItem placeholder="species ex: Cão, Gato *..." 
              value={species}
              onChangeText={value => setSpecies(value)}
            />
          </ItemRow>

          <ItemRow rounded>
            <Icon active name="paw" size={25} color={'#08d2ce'} />
            <InputItem placeholder="Pelagem ex: curto, longo *..." 
              value={fur}
              onChangeText={value => setFur(value)}
            />
          </ItemRow>

          <ItemRow rounded>
            <Icon active name="calendar" size={25} color={'#08d2ce'} />

            <DateSelect onPress={() => setShowDate(true)}>
              <LabelDate> {birthday} </LabelDate>
            </DateSelect>
          </ItemRow>

          { showDate &&
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={(e, date) => setValueDate(e, date)} 
            />
          }

          <ItemRow rounded>
            <Icon active name="user-md" size={25} color={'#08d2ce'} />
            <InputItem placeholder="Médico veterinário" 
              value={veterinary}
              onChangeText={value => setVeterinary(value)}
            />
          </ItemRow>

          <ContentButton>
            <ButtonAddPet onPress={() => handleSelectSubmit()}>
              <LabelButton> 🐱 Salvar 🐶 </LabelButton>
            </ButtonAddPet>
          </ContentButton>
        </ScrollView>
      </ContentForm>
    </Content>

  );
}

const LabelDate = styled.Text`
  font-size:16px;
  color: #000000;
`;

const DateSelect = styled(TouchableOpacity)`
  height: 50px;
  width: 90%;
  padding-left: 10px;
  justify-content: center;
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

const LabelButton = styled.Text`
  font-size: 17px;
  color: #fff;
`;

const ButtonAddPet = styled(TouchableOpacity)`
  padding: 8px;
  border: 1px solid red;
  margin: 7px 0px 25px 0px;
  background-color: #08d2ce;
  border: 1px solid #08d2ce;
  border-radius: 10px;
  align-content: center;
`;

const ContentButton = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`;

const ItemSelect = styled(Picker.Item)`
  color: #000000;
`;

const Select = styled(Picker)`
  margin-top: 15px;
  color: #000000;
  justify-content: center;
`;

const LabelInput = styled.Text`
  font-size: 19px;
  font-weight: 800;
  color: #000000;
`;

const InputItem = styled(Input)`
  padding: 15px;
  font-size: 17px;
  height: 57px;
`;

const RowFormItem = styled(Row)`
  justify-content: flex-start;
  alignitems: flex-start;
  aligncontent: flex-start;
`;

const ItemRow = styled(Item)`
  margin-top: 15px;
  padding-right: 5px;
  padding-left: 5px;
  justify-content: space-around;
`;

const ContentForm = styled.View`
  padding: 5px;
`;

const LabelTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;

const ContentHeaderTitle = styled.View`
  width: 100%;
  padding: 10px;
  alignitems: center;
`;

const ContentIcon = styled(TouchableOpacity)`
  padding: 10px;
  position: absolute;
`;

const IconArrow = styled(Icon)``;

const Header = styled.View`
  background-color: #ffb300;
  border: 1px solid #ffb300;
  elevation: 5;
`;

const Content = styled.View``;
