import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/Experience';
import image from '../assets/images/company.jpg';
const Portofolio = () => {
  return(
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <View style={styles.thirdContainer}>
          <Image source={image} style={styles.image} />
          <View style={{marginLeft: 15}}>
            <Text style={styles.position}>Engineer</Text>
            <Text style={styles.company}>Tokopedia</Text>
            <Text style={styles.date}>July 2019 - January 2020</Text>
            <Text style={styles.date}>6 Months</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Portofolio;
