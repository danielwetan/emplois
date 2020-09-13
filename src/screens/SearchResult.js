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
import styles from '../styles/SearchResult';
import image from '../assets/images/profile.jpg';
import Card from '../components/Card';
import axios from 'axios';

const SearchResult = ({ route, navigation }) => {
  const { search } = route.params;
  const [data, setData] = useState([]);

  const getUser = () => {
    axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/api/v1/talent/home',
      params: {
        search: search,
      },
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
  }, []); // jika terjadi perubahan pada search, status, page, genre

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
              nav={navigation}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default SearchResult;
