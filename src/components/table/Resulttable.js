import React, {useContext} from 'react';

import {Table} from 'antd';

import {columns} from './columns';

import {ResultContext} from '../../App';

import './table.css';

const Resulttable = () => {
  const value = useContext(ResultContext);

  return (
    <div className="result-container">
      <div className="result-table">
        {value.loading ? (
          <p>loading...</p>
        ) : (
          <Table
            rowKey={(value) => value.id}
            style={{color: 'white'}}
            columns={columns}
            pagination={{pageSize: 10}}
            dataSource={value.value}
          />
        )}
      </div>
    </div>
  );
};

export default Resulttable;
