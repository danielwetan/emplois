import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Icon, Overlay, Button } from 'react-native-elements';
import styles from '../styles/Search';
import SearchBar from '../components/SearchBar';

const Search = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

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
            onPress={toggleOverlay}
            // onPress={() => console.log('Hello')}
          />
        </TouchableOpacity>

<Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
<View style={{height: 270, width: 290, marginLeft: -10, marginRight: -10, paddingTop: 10, paddingBottom: 10}}>

<TouchableOpacity style={styles.button}>
  <Text onPress={() => {toggleOverlay(); navigation.navigate('SearchResult', { search: "a" })}} style={styles.text}>Sorting berdasarkan nama</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}>
  <Text onPress={() => {toggleOverlay(); navigation.navigate('SearchResult', { search: "a" })}} style={styles.text}>Sorting berdasarkan Skill</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}>
  <Text onPress={() => {toggleOverlay(); navigation.navigate('SearchResult', { search: "a" })}} style={styles.text}>Sorting berdasarkan Lokasi</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}>
  <Text onPress={() => {toggleOverlay(); navigation.navigate('SearchResult', { job_type: 1 })}} style={styles.text}>Sorting berdasarkan Freelance</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}>
  <Text onPress={() => {toggleOverlay(); navigation.navigate('SearchResult', { job_type: 2 })}} style={styles.text}>Sorting berdasarkan Fulltime</Text>
</TouchableOpacity>



</View>
</Overlay>
      </View>
    </View>
  );
};

export default Search;
