import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Layout } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Paginations from '../Paginatsions/Paginations';
import BackToTop from '../BackToTop/BackToTop';

const { Header, Content, Footer, Sider } = Layout;
function MenuProducts() {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            nav 4
          </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav 5
          </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            nav 6
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            nav 7
          </Menu.Item>
          <Menu.Item key="8" icon={<ShopOutlined />}>
            nav 8
          </Menu.Item>
        </Menu>
        <BackToTop />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            content
            <BackToTop />
          </div>
        </Content>
        <Footer className="">
          <Paginations />
        </Footer>
      </Layout>
    </Layout>
  // <div className="menuProducts">
  //   <Layout hasSider>
  //     <Sider
  //         style={{
  //           overflow: 'auto',
  //           height: '100vh',
  //           position: 'fixed',
  //           left: 0,
  //           top: 0,
  //           bottom: 0,
  //         }}
  //     >
  //   <Menu
  //     defaultSelectedKeys={['1']}
  //     defaultOpenKeys={['sub1']}
  //     mode="inline"
  //     theme="dark"
  //   >
  //     <Menu.Item key="1" icon={<PieChartOutlined />}>
  //       Option 1
  //     </Menu.Item>
  //     <Menu.Item key="2" icon={<DesktopOutlined />}>
  //       Option 2
  //     </Menu.Item>
  //     <Menu.Item key="3" icon={<ContainerOutlined />}>
  //       Option 3
  //     </Menu.Item>
  //     <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
  //       <Menu.Item key="5">Option 5</Menu.Item>
  //       <Menu.Item key="6">Option 6</Menu.Item>
  //       <Menu.Item key="7">Option 7</Menu.Item>
  //       <Menu.Item key="8">Option 8</Menu.Item>
  //     </SubMenu>
  //     <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
  //       <Menu.Item key="9">Option 9</Menu.Item>
  //       <Menu.Item key="10">Option 10</Menu.Item>
  //       <SubMenu key="sub3" title="Submenu">
  //         <Menu.Item key="11">Option 11</Menu.Item>
  //         <Menu.Item key="12">Option 12</Menu.Item>
  //       </SubMenu>
  //     </SubMenu>
  //   </Menu>,
  //
  // </div>
  );
}

export default MenuProducts;
