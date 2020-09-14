/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/Register'
import image from '../assets/images/logo.png';

const Register = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 40}}>
        <Image source={image}/>
      </View>
        <View style={{marginBottom: 50}}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>Lorom ipsum dolor si amet uegas anet.</Text>
        </View>

        <View style={{marginBottom: 32}}>
          <Text style={styles.label}>Nama</Text>
          <TextInput style={styles.form} placeholder="Masukan nama panjang"/>
        </View>

        <View style={{marginBottom: 32}}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.form} placeholder="Masukan no handphone"/>
        </View>

        <View style={{marginBottom: 32}}>
          <Text style={styles.label}>Kata sandi</Text>
          <TextInput style={styles.form} placeholder="Masukan kata sandi"/>
        </View>

        <View style={{marginBottom: 40}}>
          <Text style={styles.label}>Konfirmasi kata sandi</Text>
          <TextInput style={styles.form} placeholder="Masukan konfirmasi kata sandi"/>
        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Anda sudah punya akun? <Text onPress={() => navigation.navigate('Login')} style={styles.loginLink}>Masuk disini</Text></Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Register;
