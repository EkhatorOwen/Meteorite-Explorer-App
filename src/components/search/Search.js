import React from 'react'

import { Input, Button  } from 'antd';

import './search.css'

const Search = () => {
  return (
    <div className="search-box">
      <Input className="search-box-input" placeholder="Enter search terms"/>
      <Button type="primary">Primary</Button>

    </div>
  )
}

export default Search
