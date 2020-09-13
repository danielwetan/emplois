/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { SearchBar, Pressable } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { View, Text } from 'react-native';

import styles from '../styles/SearchBar';

const Search = (props) => {
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  const submit = () => {
    let param = search;
    setSearch('');
    props.nav.navigate('SearchResult', { search: param });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Backend Engineer"
        onChangeText={updateSearch}
        value={search}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
        searchIcon={styles.searchIcon}
        onSubmitEditing={() =>
          // props.nav.navigate('Collection', {search: search})
          submit()
        }
        clearIcon={false}
      />
    </View>
  );
};

export default Search;
