import React from 'react';
import './Navigation.scss';
import { Link, Outlet } from 'react-router-dom';
import Avatars from '../../components/Avatars/Avatars';

const Head = () => (
  <div>
    {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link to="/nothing-here">Nothing Here</Link>
    </li> */}
        <li>
          <Link to="/products">Products</Link>
        </li>
        <Avatars />
      </ul>
    </nav>

    <hr />

    {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
    <Outlet />
  </div>
);

export default Head;
