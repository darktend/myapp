import React from 'react';
import './Navigation.scss';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import Avatars from '../../components/Avatars/Avatars';

const { SubMenu } = Menu;
const Head = () => (
  <div>
    {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}

    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/products">Products</Link>
      </Menu.Item>
    </Menu>
    <Outlet />
  </div>
);

export default Head;
