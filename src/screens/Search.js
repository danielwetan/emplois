import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../styles/Search';
import SearchBar from '../components/SearchBar';

const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <SearchBar nav={navigation} />
        <TouchableOpacity style={styles.button}>
          <Icon
            name="list"
            type="entypo"
            color="#9EA0A5"
            size={25}
            onPress={() => console.log('Hello')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
