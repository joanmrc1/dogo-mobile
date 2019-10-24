import { create } from 'apisauce';
import Reactotron from 'reactotron-react-native';

const api = create({
  baseURL: 'https://db5b07de.ngrok.io',
});

api.addMonitor(Reactotron.apisauce);

export default api;
