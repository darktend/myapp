import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Head from '../../page/Navigation/Navigation';
import About from '../../page/About/About';
import Cards from '../../page/Home/Home';
import Products from '../../page/Products/Products';

const Navbar = () => (
  <Routes>
    <Route path="/" element={<Head />}>
      {/* <Route element={<Cards />} /> */}
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
    </Route>
  </Routes>
);

export default Navbar;
