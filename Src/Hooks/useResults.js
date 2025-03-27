import {useEffect,useState} from 'react';
import api from '../API/api';

export default () => {
  const [results, setResults] = useState([]);
  const searchapi = async searchTerm => {
    const response = await api.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'İstanbul',
      },
    });

    setResults(response.data.businesses);
  };
  useEffect(() => {
    searchapi('Toast');
  }, []);

  return [searchapi, results];
};
