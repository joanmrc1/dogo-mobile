import {create} from 'apisauce';
import Reactotron from 'reactotron-react-native';

const api = create({
  baseURL: 'https://480e1f1b.ngrok.io/',
});

api.addMonitor(Reactotron.apisauce);

export default api;
