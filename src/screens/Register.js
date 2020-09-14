import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Main from '../components/Register';
import {SafeAreaView} from 'react-native';

const Register = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Main navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

export default Register;
