import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/Portofolio';
import image from '../assets/images/profile.jpg';
const Portofolio = (props) => {
  // const image = 'http://52.91.125.110/api/images/' + props.image;
  const image = 'http://192.168.43.186:3000/images/' + props.image;

  return(
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <Image
          source={{uri: image}}
          style={styles.image}
        />
      </View>
    </View>
  )
}

export default Portofolio;
