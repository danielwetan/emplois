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
import image from '../assets/images/profile.jpg';
import Portofolio from '../components/Portofolio';
import Experience from '../components/Experience';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Profile = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();
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
            <Image source={image} style={styles.image} />
          </View>
          <Text style={styles.name}>Daniel Saputra</Text>
          <Text style={styles.position}>Backend Engineer</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="map-pin" type="feather" color="#9EA0A5" size={20} />
            <Text style={styles.social}>Jakarta, Indonesia</Text>
          </View>
          <Text style={styles.talent}>Talent</Text>
          <Text style={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>

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

          </View>
        </View>

        <View style={styles.thirdContainer}>
          <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              fontSize: 16,
              fontFamily: 'OpenSans-SemiBold',
              textTransform: 'none',
            },
            style: {
              height: 60,
            },
            tabStyle: {
              marginTop: 5,
            },
          }}
          >
            <Tab.Screen name="Portofolio" component={Portofolio} />
            <Tab.Screen name="Experience" component={Experience} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
