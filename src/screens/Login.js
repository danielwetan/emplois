/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/Login'
import image from '../assets/images/logo.png';
const Login = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
      <View style={{marginTop: 40}}>
        <Image source={image}/>
      </View>
        <View style={{marginBottom: 50}}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Lorom ipsum dolor si amet uegas anet.</Text>
        </View>

        <View style={{marginBottom: 32}}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.form} placeholder="Masukan alamat email"/>
        </View>

        <View style={{marginBottom: 24}}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.form} placeholder="Masukan kata sandi"/>
        </View>

        <View>
          <Text style={styles.forgotPassword}>Lupa kata sandi?</Text>
          <TouchableOpacity style={styles.button}>
            <Text onPress={() => navigation.navigate('Home')} style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>Anda belum punya akun? <Text onPress={() => navigation.navigate('Register')} style={styles.registerLink}>Daftar disini</Text></Text>
        </View>
      </View>
    </>
  );
};

export default Login;
