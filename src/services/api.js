import {create} from 'apisauce';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

const api = create({
  baseURL: 'https://7f6b4bd0.ngrok.io/',
});

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@DogoApp:token');

  if (token) request.headers.Authorization = `Bearer ${token}`;
});


api.addMonitor(Reactotron.apisauce);

export default api;
