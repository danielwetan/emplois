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
import styles from '../styles/Home';
import lineImg from '../assets/images/line.png';
import dotImg from '../assets/images/dot.png';
import Card from '../components/Card';
import axios from 'axios';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getUser = () => {
    axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/api/v1/talent/home',
    })
      .then((res) => {
        setData(res.data.body);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.topContainer}>
        <Image source={dotImg} />
        <Text style={styles.date}>Sen, 13 September 2020</Text>
        <View style={styles.bellImg}>
          <Icon
            name="bell"
            type="feather"
            color="#fff"
            size={25}
            onPress={() => navigation.navigate('Notification')}
          />
        </View>
        <Text style={styles.message}>Hi, User!</Text>
        <Image source={lineImg} style={styles.lineImg} />
      </View>

      <View style={styles.cardContainer}>
        {data.map((d) => {
          return (
            <Card
              key={d.id}
              id={d.user_id}
              name={d.name}
              image={d.image}
              position={d.position}
              location={d.location}
              description={d.description}
              email={d.email}
              instagram={d.instagram}
              github={d.github}
              linkedin={d.linkedin}
              portofolioImage={d.portofolio_image}
              experiencePosition={d.experience_position}
              experienceCompany={d.experience_company}
              experienceDate={d.experience_date}
              experienceDescription={d.experience_description}
              nav={navigation}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Home;
