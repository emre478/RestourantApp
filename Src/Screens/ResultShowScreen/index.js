import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../API/api';


export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await api.get(`/${id}`);
    console.log(response.data);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style = {styles.title}>{result.name}</Text>
      <Text style = {styles.phone}>{result.phone}</Text>
      {result.is_closed ? (
        <Image style={styles.open} source={require('../../Assets/icon/delivery.png')} ></Image>
      ) : (
        <Image style={styles.close} source={require('../../Assets/icon/delivery.png')} ></Image>
      )}
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return (
            <Image style={styles.image} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 400,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  phone: {
    alignSelf: 'center',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
  open: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    marginTop: 10,
  },
  close: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    marginTop: 10,
  },
});