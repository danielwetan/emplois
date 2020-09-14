import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/Experience';
import image from '../assets/images/company.jpg';
const Portofolio = (props) => {
  return(
    <View style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <View style={styles.thirdContainer}>
          <Image source={image} style={styles.image} />
          <View style={{marginLeft: 15}}>
            <Text style={styles.position}>{props.position}</Text>
            <Text style={styles.company}>{props.company}</Text>
            <Text style={styles.date}>{props.date}</Text>
            <Text style={styles.date}>11 Months</Text>
            <Text style={styles.description}>{props.description}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Portofolio;
