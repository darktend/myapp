import { Pagination } from 'antd';
import React from 'react';
// import './Paginations.scss';

function Paginations() {
  return (
  // eslint-disable-next-line react/react-in-jsx-scope
    <Pagination
      className="paginations"
      total={80}
    />
  );
}

export default Paginations;
