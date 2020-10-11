import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Main from '../components/EditProfile';

const EditProfile = ({navigation}) => {

  return (
    <>
    <View>
      <Main navigation={navigation} />
    </View>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default EditProfile
