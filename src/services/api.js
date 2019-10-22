import { create } from 'apisauce';
import Reactotron from 'reactotron-react-native';

const api = create({
  baseURL: 'https://1b992e7f.ngrok.io',
});

api.addMonitor(Reactotron.apisauce);

export default api;
