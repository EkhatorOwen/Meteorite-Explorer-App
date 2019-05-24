import React, {useContext, useState}  from 'react';
import {ResultContext} from '../../App';


import {Input, Button} from 'antd';

import './search.css';

const Search = () => {
  const [text, setText] = useState('')
  const value = useContext(ResultContext);

  return (
    <div className="search-box">
      <div className="search-box-input">
        <Input onChange={e=>setText(e.target.value)} style={{width: '85%'}} placeholder="Enter search terms" />
        <Button onClick={()=>value.handleSearch(text)}  style={{backgroundColor:"#3F51B5"}} type="primary">Search</Button>
      </div>
    </div>
  );
};

export default Search;
