// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import Board from '../board/Board';
import Header from '../header/Header';
import MapContainer from '../map/Map';

// == Import
import './styles.scss';

// == Composant
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [dataFromApi, setDataFromApi] = useState(null);
  const [location, setLocation] = useState({
    lat: 48.8566969,
    lng: 2.3514616,
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=at_RuiOtIxX6cl9kYl0EnoRkN0JlL3Vl&ipAddress=${inputValue}`
      );
      setDataFromApi(res.data);
      setLocation({
        lat: res.data.location.lat,
        lng: res.data.location.lng,
      });
    } catch (error) {
      console.error('error:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  return (
    <div className="app">
      <div className="container">
        <Header
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <Board data={dataFromApi} />
      </div>
      <MapContainer location={location} />
    </div>
  );
};

// == Export
export default App;