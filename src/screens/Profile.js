import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon} from  'react-native-elements';
import styles from '../styles/Profile';
import image from '../assets/images/profile.jpg';
const Profile = () => {
  return(
    <>
      <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.secondContainer}>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image
            source={image}
            style={styles.image}
          />
          </View>
          <Text style={styles.name}>Daniel Saputra</Text>
          <Text style={styles.position}>Backend Engineer</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name='map-pin' type='feather' color='#9EA0A5' size={20}/>
            <Text style={styles.social}>Jakarta, Indonesia</Text>
          </View>
          <Text style={styles.talent}>Talent</Text>
          <Text style={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>

          <View style={{marginBottom: 40,}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name='email-outline' type='material-community' color='#9EA0A5' />
              <Text style={styles.social}>danielwetan.io@gmail.com</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Icon name='instagram' type='antdesign' color='#9EA0A5' />
              <Text style={styles.social}>@danielwetan</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Icon name='github' type='feather' color='#9EA0A5' />
              <Text style={styles.social}>github.com/danielwetan</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Icon name='gitlab' type='feather' color='#9EA0A5' />
              <Text style={styles.social}>gitlab.com/danielwetan</Text>
            </View>
          </View>
        </View>


        <View style={styles.thirdContainer}>
          <Text style={styles.name}>Daniel Saputra</Text>
        </View>


      </ScrollView>
    </>
  )
}

export default Profile;
