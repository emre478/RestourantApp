import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchBar from '../../Components/SearchBar';
import ResultsList from '../../Components/ResultsList';
import useResults from '../../Hooks/useResults';

export default function SearchScreen() {
  const [searchapi, results] = useResults();
  console.log(results);

  const filterResultsByPrice = price => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar />
      <ResultsList title='Ucuz Restorantlar' results={filterResultsByPrice('₺')} />
      <ResultsList title='Uygun Restorantlar' results={filterResultsByPrice('₺₺')} />
      <ResultsList title='Pahalı Restorantlar' results={filterResultsByPrice('₺₺₺')} />
    </View>
  );
}


const styles = StyleSheet.create({});