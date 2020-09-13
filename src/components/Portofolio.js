import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/Portofolio';
import image from '../assets/images/profile.jpg';
const Portofolio = () => {
  return(
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <Image
          source={image}
          style={styles.image}
        />
      </View>
    </View>
  )
}

export default Portofolio;
