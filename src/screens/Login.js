import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Main from '../components/Login';
import { SafeAreaView } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F7F8' }}>
        <Main navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

export default Login;
