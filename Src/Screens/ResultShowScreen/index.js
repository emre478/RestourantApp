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
      <Text>{result.name}</Text>
      <Text>{result.phone}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return (
            <Image style={{ width: 50, height: 50 }} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});