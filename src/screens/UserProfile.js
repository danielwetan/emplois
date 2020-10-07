/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios';

const Profile = ({ route }) => {
  const {
    id,
    name,
    image,
    position,
    location,
    description,
    email,
    instagram,
    github,
    linkedin,
    portofolioImage,
    experiencePosition,
    experienceCompany,
    experienceDate,
    experienceDescription,
  } = route.params;
  const profileImg = 'http://192.168.43.186:3000/images/' + image;

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
            <Image source={{ uri: profileImg }} style={styles.image} />
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
              <Text style={styles.social}>{email}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon name="instagram" type="antdesign" color="#9EA0A5" />
              <Text style={styles.social}>{instagram}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon name="github" type="feather" color="#9EA0A5" />
              <Text style={styles.social}>{github}</Text>
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

<Tab.Screen
name="Portofolio"
children={()=><Portofolio image={portofolioImage}/>}
/>
<Tab.Screen
name="Experience"
children={()=><Experience position={experiencePosition} company={experienceCompany} date={experienceDate} description={experienceDescription}/>}
/>
          </Tab.Navigator>
        </View>

      </ScrollView>
    </>
  );
};

export default Profile;
