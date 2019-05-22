import React, { useEffect, useState } from 'react';

import {Table, Divider, Tag} from 'antd';

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
     // console.log(data)
      setValue(data)
    });
  },[])



  return (
    <div className="result-container">
      <div className="result-table">
        <Table columns={columns} pagination={{ pageSize: 50 }} dataSource={value} />
      </div>
    </div>
  );
};

export default Resulttable;
