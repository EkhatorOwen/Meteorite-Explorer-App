import React, {useEffect, useState} from 'react';

import Header from './components/header/Header';
import Search from './components/search/Search';
import Resulttable from './components/table/Resulttable';

import './App.css';

export const ResultContext = React.createContext();

function App() {
  const [value, setValue] = useState([]);
  const [originalArray, setOriginalArray] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true)
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let newArr = [];
        data
          .sort((a, b) => a.name > b.name)
          .map((elem) => {
            let obj = {
              name: elem.name,
              id: elem.id,
              nametype: elem.nametype,
              recclass: elem.recclass,
              mass: elem.mass,
              fall: elem.fall,
              year: new Date(elem.year).toDateString(),
              latitude: elem.geolocation ? elem.geolocation.latitude : '',
              logitude: elem.geolocation ? elem.geolocation.longitude : '',
            };
            return newArr.push(obj);
          });
        setValue(newArr);
        setOriginalArray(newArr);
        setLoading(false);
      });
  }, []);

  const handleSearch = (val) => {
    if (val === '') setValue(originalArray);
    const newVal = val.toLowerCase()

 
    const result = originalArray.filter((elem) => elem.name.toLowerCase().includes(newVal));
    setValue(result);
  };

  return (
    <ResultContext.Provider value={{value, isLoading, handleSearch}}>
      <div className="content_setting">
        <Header />
        <Search />
        <Resulttable />
      </div>
    </ResultContext.Provider>
  );
}

export default App;
