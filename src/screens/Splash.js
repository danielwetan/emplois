import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import logo from '../assets/images/peworld.png';
import background from '../assets/images/splash.png';
import styles from '../styles/Splash.js';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({ navigation }) => {
  return (
    <>


    <LinearGradient
      colors={['#2974FA', '#38ABFD', '#43D4FF']} style={{flex:1}}>

        <ImageBackground
          source={background}
          style={{ width: '100%', height: '100%' }}>

          <View style={styles.container}>
            <View style={{ marginTop: 40, marginBottom: 110 }}>
              <Image source={logo} />
            </View>
            <View style={{ marginBottom: 200 }}>

              <Text style={styles.text}>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </Text>

            </View>
            <TouchableOpacity style={styles.button}>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={styles.buttonText}>
                Masuk sebagai pekerja
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.whiteButton}>
              <Text style={styles.whiteButtonText}>Masuk sebagai perekrut</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        </LinearGradient>


    </>
  );
};

export default Splash;
