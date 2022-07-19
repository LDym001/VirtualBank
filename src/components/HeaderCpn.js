import { useNavigate } from "react-router-dom";
import { Layout, Menu, Badge, Avatar } from "antd";
import { SearchOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import '../App.css'


export default function Header() {
  const {Header} =Layout
  
  const navigate = useNavigate()
    
  const changeRouter = (path) => {
    console.log(path,'---------')
    let url = '/' + path
    navigate(url)
  }
  
  const items = [
    {
      key: 'client',
      label: '客户端',
      onClick: () => changeRouter('client')
    },
    {
      key: 'server',
      label: '服务端',
      onClick: () => changeRouter('server')
    }
  ]
  
  const itemLs = [
    {
      key: 'search',
      icon: <SearchOutlined style={{ fontSize: '17px'}}/>,
      style: {padding: '0 10px'}
    },
    {
      key: 'bell',
      style: {padding: '0 10px'},
      icon: <Badge dot><BellOutlined style={{ fontSize: '17px', color: '#a6adb4'}}/></Badge>,
    },
    {
      key: 'welcome',
      style: {width: '70px', padding: '0 -10px 0 0', color: '#fff'},
      label:'hi,admin',
    },
    {
      key: 'avatar',
      icon: <Avatar icon={<UserOutlined />} style={{backgroundColor: '#87d068'}}/>,
      style: {padding: '0 10px'}
    }
  ]

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <a href="#"></a>
        </div>
        <div className="menu-container">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items} />
          <Menu theme="dark" mode="horizontal" items={itemLs}/>
        </div>
      </Header>
    </Layout>
  )
}