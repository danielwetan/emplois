import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon} from  'react-native-elements';
import styles from '../styles/SearchResult';
import image from '../assets/images/profile.jpg';
const SkillTag = () => {
  return(
    <View>
      <Text style={{backgroundColor: '#FBB017', padding: 3, margin: 3, borderRadius: 4,}}>
         <Text style={{color: '#FFFFFF', fontSize: 12, fontFamily: 'OpenSans-Bold'}}>PHP</Text>
      </Text>
    </View>
  )
}

export default SkillTag;
