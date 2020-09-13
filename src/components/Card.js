import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon} from  'react-native-elements';
import styles from '../styles/SearchResult';
import image from '../assets/images/profile.jpg';
const Card = () => {
  return(
      <View style={styles.card}>
      <TouchableOpacity onPress={() => console.log('Hello')}>
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>Daniel Saputra</Text>
        <Text style={styles.position}>Software Engineer</Text>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{backgroundColor: '#FBB017', padding: 3, margin: 3, borderRadius: 4,}}>
               <Text style={{color: '#FFFFFF', fontSize: 12, fontFamily: 'OpenSans-Bold'}}>PHP</Text>
            </Text>
          </View>
          <View>
            <Text style={{backgroundColor: '#FBB017', padding: 3, margin: 3, marginRight: 5, borderRadius: 4,}}>
               <Text style={{color: '#FFFFFF', fontSize: 12, fontFamily: 'OpenSans-Bold'}}>Node.js</Text>
            </Text>
          </View>
          <View>
            <Text style={{backgroundColor: '#FBB017', padding: 3, margin: 3, borderRadius: 4,}}>
               <Text style={{color: '#FFFFFF', fontSize: 12, fontFamily: 'OpenSans-Bold'}}>C++</Text>
            </Text>
          </View>
        </View>
        </TouchableOpacity>

      </View>
  )
}

export default Card;
