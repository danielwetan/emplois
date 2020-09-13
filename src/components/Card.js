/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles/SearchResult';
import image from '../assets/images/profile.jpg';
const Card = (props) => {
  const image = 'http://192.168.43.186:3000/images/' + props.image;
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          props.nav.navigate('UserProfile', {
            id: props.id,
            name: props.name,
            image: props.image,
            position: props.position,
            location: props.location,
            description: props.description,
          })
        }>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.position}>{props.position}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text
              style={{
                backgroundColor: '#FBB017',
                padding: 3,
                margin: 3,
                borderRadius: 4,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 12,
                  fontFamily: 'OpenSans-Bold',
                }}>
                PHP
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                backgroundColor: '#FBB017',
                padding: 3,
                margin: 3,
                marginRight: 5,
                borderRadius: 4,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 12,
                  fontFamily: 'OpenSans-Bold',
                }}>
                Node.js
              </Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                backgroundColor: '#FBB017',
                padding: 3,
                margin: 3,
                borderRadius: 4,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 12,
                  fontFamily: 'OpenSans-Bold',
                }}>
                C++
              </Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
