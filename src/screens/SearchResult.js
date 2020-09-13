import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon} from  'react-native-elements';
import styles from '../styles/SearchResult';
import image from '../assets/images/profile.jpg';
import Card from '../components/Card';

const SearchResult = () => {
  return(
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  )
}


export default SearchResult;
