import React from 'react';
import CardProducts from '../CardProducts/CardProducts';
import Paginations from '../../components/Paginatsions/Paginations';
import MenuProducts from '../../components/MenuProducts/MenuProducts';
import './Products.scss';

function Products() {
  return (
    <div className="products">
      <div className="products__body">
        <MenuProducts />
        {/* <CardProducts /> */}
      </div>
      {/* <Paginations /> */}
    </div>
  );
}

export default Products;
