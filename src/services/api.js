import { create } from 'apisauce';
import Reactotron from 'reactotron-react-native';

const api = create({
  baseURL: ' https://45b0029e.ngrok.io',
});

api.addMonitor(Reactotron.apisauce);

export default api;
