import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { StatusBar } from 'expo-status-bar';
import store from './src/store';
import Main from './src/main';

const persistor = persistStore(store);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar hidden />
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
