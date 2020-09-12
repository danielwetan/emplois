import React from 'react';
import {View, Text} from 'react-native';

import {Provider} from 'react-redux';
import storage from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
const {store, persistor} = storage;

import Login from './src/screens/Login';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={{backgroundColor: '#F6F7F8', flex: 1}}>
            <Login />
          </View>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
