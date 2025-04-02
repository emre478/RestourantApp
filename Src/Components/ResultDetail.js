import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ResultDetail({result}) {
  return (
    <View>
      <Image
        style={{width: 250, height: 125}}
        source={result.image_url ? {uri: result.image_url} : null}
      />

      <Text>{result.name}</Text>
      <Text>{result.rating} Yıldız</Text>
      <Text>{result.review_count} Yorum</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
