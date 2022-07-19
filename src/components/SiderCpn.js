import { RadiusSettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from "react-router-dom";
// import ContentCpn from './ContentCpn';
import React from 'react';
const {Sider} = Layout


export default function SiderCpn() {
  const navigate = useNavigate()
  
  const changeRouter = (path) => {
    console.log(path,'---------')
    let url = '/' + path
    navigate(url)
  }
  
  const items2 = [
    {
      key: 'role',
      icon: <RadiusSettingOutlined/>,
      label: '用户管理',
      onClick: () => changeRouter('role')
    },{
      key: 'project',
      icon: <AppstoreOutlined />,
      label: '项目管理',
      onClick: () => changeRouter('project')
    },{
      key: 'trade',
      icon: <AppstoreOutlined />,
      label: '交易管理',
      onClick: () => changeRouter('trade')
    },{
      key: 'rating',
      icon: <AppstoreOutlined />,
      label: '权限管理',
      onClick: () => changeRouter('rating')
    }
  ]
  return (
    // <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
    // </Layout>
  )
}