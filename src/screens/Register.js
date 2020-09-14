/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/Register'
import image from '../assets/images/logo.png';

import { connect } from 'react-redux';
import { register } from '../redux/actions/auth';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const userRegistration = () => {
  const data = {
    name: name,
    email: email,
    phone_number: phoneNumber,
    password: password,
  }
  props.dispatch(register(data))
    .then(() => {
      navigation.navigate('Home')
    })
    .catch((err) => {
      console.log(err, "here")
    })
}

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
          <TextInput onChangeText={text => setName(text)} style={styles.form} placeholder="Masukan nama panjang"/>
        </View>

        <View style={{marginBottom: 32}}>
          <Text style={styles.label}>Email</Text>
          <TextInput onChangeText={text => setEmail(text)} style={styles.form} placeholder="Masukan email"/>
        </View>

        <View style={{marginBottom: 32}}>
          <Text style={styles.label}>No handphone</Text>
          <TextInput onChangeText={text => setPhoneNumber(text)} style={styles.form} placeholder="Masukan no handphone"/>
        </View>

        <View style={{marginBottom: 32}}>
          <Text style={styles.label}>Kata sandi</Text>
          <TextInput onChangeText={text => setPassword(text)} style={styles.form} placeholder="Masukan kata sandi"/>
        </View>

        <View style={{marginBottom: 40}}>
          <Text style={styles.label}>Konfirmasi kata sandi</Text>
          <TextInput style={styles.form} placeholder="Masukan konfirmasi kata sandi"/>
        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <Text onPress={() => navigation.navigate('Home')} style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Anda sudah punya akun? <Text onPress={() => navigation.navigate('Login')} style={styles.loginLink}>Masuk disini</Text></Text>
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Register)
