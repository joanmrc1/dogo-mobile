import {create} from 'apisauce';
import Reactotron from 'reactotron-react-native';

const api = create({
  baseURL: 'https://234dec7e.ngrok.io/',
});

api.addMonitor(Reactotron.apisauce);

export default api;
