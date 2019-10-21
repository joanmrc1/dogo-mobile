import { create } from 'apisauce';
import Reactotron from 'reactotron-react-native';


const api = create({
  baseURL: ' https://c83ca111.ngrok.io',
});

api.addMonitor(Reactotron.apisauce);

export default api;
