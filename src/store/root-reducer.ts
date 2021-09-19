import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import appReducer from './slice';

const authPersistConfig = {
  key: 'app',
  storage: AsyncStorage,
};
export default combineReducers({
  app: persistReducer(authPersistConfig, appReducer),
});
