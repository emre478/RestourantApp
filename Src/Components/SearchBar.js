import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';

export default function SearchBar() {
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    top: 35,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    borderRadius: 5,
    margin: 10,
    height: 40,
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
