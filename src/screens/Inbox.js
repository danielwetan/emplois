import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/Notification';
import image from '../assets/images/inbox.png';
const Notification = () => {
  return(
    <>
        <View style={styles.container}>
          <Image source={image}/>
          <Text style={styles.text}>Belum ada inbox</Text>
        </View>
    </>
  )
}

export default Notification;
