import React, { useState } from 'react';
import { AlignLeftOutlined, AlignRightOutlined, MenuOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined,} from '@ant-design/icons';
import { Layout, Menu } from 'antd';






const { Header, Sider, Content } = Layout;

const SidebarItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'nav 1',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'nav 2',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'nav 3',
    },
]

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (

    <Layout style={{height: "100vh"}}>

      <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={SidebarItems} />
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0,}}>
          {React.createElement(collapsed ? AlignLeftOutlined : MenuOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>

        <Content className="site-layout-background" style={{ margin: '24px 16px', padding: 24, minHeight: 280, }}>
          Content
        </Content>

      </Layout>
      
    </Layout>
  );
};
export default Sidebar;



