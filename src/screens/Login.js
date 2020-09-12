/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles/Login'
const Login = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.logo}>Logo</Text>

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
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>Anda belum punya akun? <Text style={styles.registerLink}>Daftar disini</Text></Text>
        </View>
      </View>
    </>
  );
};

export default Login;
