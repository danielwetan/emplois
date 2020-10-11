/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
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

import { connect } from "react-redux";

const Profile = (props) => {
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
          <Text style={styles.name}>{props.auth.data.name}</Text>
          <Text style={styles.position}>{props.auth.data.position}</Text>
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
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('EditProfile')}>
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
              <Text style={styles.social}>arkademy@mail.com</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon name="instagram" type="antdesign" color="#9EA0A5" />
              <Text style={styles.social}>@arkademy</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon name="github" type="feather" color="#9EA0A5" />
              <Text style={styles.social}>github.com/arkademy</Text>
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
            children={()=><Portofolio image={'portofolio1.png'}/>}
          />
          <Tab.Screen
            name="Experience"
            children={()=><Experience position={'Engineer'} company={'Google'} date={'August 2019 - July 2020'} description={'Ut lobortis quam eu luctus placerat. Sed quis bibendum mi, nec pellentesque justo. Vivamus vehicula sem id elit sagittis, ac rutrum sapien pulvinar. Duis laoreet mauris at maximus tempus'}/>}
          />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile)
