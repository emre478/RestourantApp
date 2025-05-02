import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../../Components/SearchBar';
import ResultsList from '../../Components/ResultsList';
import useResults from '../../Hooks/useResults';

export default function SearchScreen() {
  const [searchapi, results, errorMessage] = useResults();
  const [term, setTerm] = useState('')
  console.log(results);

  const filterResultsByPrice = price => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
      term = {term} 
      onTermChange={setTerm}
      onTermSubmit={() => searchapi(term)}/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length === 0 ? <Text>Yükleniyor...</Text> : null}
      <ResultsList title='Ucuz Restorantlar' results={filterResultsByPrice('₺')} />
      <ResultsList title='Uygun Restorantlar' results={filterResultsByPrice('₺₺')} />
      <ResultsList title='Pahalı Restorantlar' results={filterResultsByPrice('₺₺₺')} />
    </View>
  );
}


const styles = StyleSheet.create({});