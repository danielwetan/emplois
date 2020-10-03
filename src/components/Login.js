/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/Login';
import image from '../assets/images/logo.png';

import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    props
      .dispatch(login(data))
      .then(() => {
        props.navigation.navigate('Home');
      })
      .catch((err) => {
        console.log(err, 'here');
      });
  };
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginTop: 40 }}>
          <Image source={image} />
        </View>
        <View style={{ marginBottom: 50 }}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Lorom ipsum dolor si amet uegas anet.
          </Text>
        </View>

        <View style={{ marginBottom: 32 }}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            style={styles.form}
            placeholder="Masukan alamat email"
          />
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            style={styles.form}
            placeholder="Masukan kata sandi"
          />
        </View>

        <View>
          <Text style={styles.forgotPassword}>Lupa kata sandi?</Text>
          <TouchableOpacity style={styles.button}>
            <Text onPress={userLogin} style={styles.buttonText}>
              Masuk
            </Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>
            Anda belum punya akun?{' '}
            <Text
              onPress={() => props.navigation.navigate('Register')}
              style={styles.registerLink}>
              Daftar disini
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Login);
