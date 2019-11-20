import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

export default function ThemeSelect() {
	return useSelector(state => state.theme.color);
}
