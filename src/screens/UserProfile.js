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
import styles from '../styles/Profile';
import Portofolio from '../components/Portofolio';
import Experience from '../components/Experience';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Profile = ({ route }) => {
  const { id, name, image, position, location, description } = route.params;
  const getImg = 'http://192.168.43.186:3000/images/' + image;

  const Tab = createBottomTabNavigator();
  return (
    <>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.secondContainer}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={{ uri: getImg }} style={styles.image} />
          </View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.position}>{position}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="map-pin" type="feather" color="#9EA0A5" size={20} />
            <Text style={styles.social}>{location}</Text>
          </View>
          <Text style={styles.talent}>Talent</Text>
          <Text style={styles.about}>{description}</Text>

          <View style={{ marginBottom: 30, marginRight: 100 }}>
            <Text style={styles.skillTitle}>Skill</Text>
            <View style={{ flexDirection: 'row', width: 300 }}>
              <View>
                <Text
                  style={{
                    backgroundColor: '#FBB017',
                    padding: 5,
                    margin: 5,
                    borderRadius: 4,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
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
                    padding: 5,
                    margin: 5,
                    marginRight: 5,
                    borderRadius: 4,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
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
                    padding: 5,
                    margin: 5,
                    borderRadius: 4,
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 14,
                      fontFamily: 'OpenSans-Bold',
                    }}>
                    C++
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 40 }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon
                name="email-outline"
                type="material-community"
                color="#9EA0A5"
              />
              <Text style={styles.social}>danielwetan.io@gmail.com</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon name="instagram" type="antdesign" color="#9EA0A5" />
              <Text style={styles.social}>@danielwetan</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon name="github" type="feather" color="#9EA0A5" />
              <Text style={styles.social}>github.com/danielwetan</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon name="gitlab" type="feather" color="#9EA0A5" />
              <Text style={styles.social}>gitlab.com/danielwetan</Text>
            </View>
          </View>
        </View>

        <View style={styles.thirdContainer}>
          <Portofolio />
          <Experience />
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
