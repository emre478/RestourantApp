import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';

export default function SearchBar({term,onTermChange, onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <Image
        source={require('../Assets/icon/search.png')}
        style={styles.iconStyle}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    top: 10,
    backgroundColor: 'lightgray',
    flexDirection: 'row',

    margin: 10,
    height: 45,
    alignItems: 'center',
    borderRadius: 20,
  },

  iconStyle: {
    marginHorizontal: 15,
    width: 20,
    height: 20,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
