import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon} from  'react-native-elements';
import styles from '../styles/Home';
import lineImg from '../assets/images/line.png';
import dotImg from '../assets/images/dot.png';
import bellImg from '../assets/images/bell.png'
import Card from '../components/Card';

const Home = () => {
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.topContainer}>
    <Image source={dotImg}/>
      <Text style={styles.date}>Sen, 21 April 2020</Text>
      <View style={styles.bellImg}>
        <Icon name='bell' type='feather' color='#fff' size={25} onPress={() => console.log("Icon")} />
      </View>
      <Text style={styles.message}>Hai, Daniel Saputra!</Text>
      <Image source={lineImg} style={styles.lineImg}/>
    </View>

      <View style={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  )
}


export default Home;
