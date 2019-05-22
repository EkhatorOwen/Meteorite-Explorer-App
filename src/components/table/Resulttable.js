import React, { useEffect, useState } from 'react';

import {Table} from 'antd';

import {columns} from './columns';

import './table.css';

const Resulttable = () => {

    const [value, setValue] = useState([])

  useEffect(()=>{
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
     
      let newArr= []
      data.sort((a,b)=>a.name>b.name).map(elem=>{
        let obj = {
          name: elem.name,
          id: elem.id,
          nametype: elem.nametype,
          recclass: elem.recclass,
          mass: elem.mass,
          fall: elem.fall,
          year: new Date(elem.year).toDateString(),
           latitude: elem.geolocation ? elem.geolocation.latitude : '',
           logitude: elem.geolocation ? elem.geolocation.longitude : ''
        }
       return newArr.push(obj)
      })
      setValue(newArr)
    });
  },[])



  return (
    <div className="result-container">
      <div className="result-table">
        <Table rowKey={value=>value.id} style={{color:'white'}} columns={columns} pagination={{ pageSize: 10 }} dataSource={value} />
      </div>
    </div>
  );
};

export default Resulttable;
