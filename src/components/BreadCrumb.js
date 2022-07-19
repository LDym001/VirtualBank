import { Breadcrumb, Layout } from "antd";
import '../App.css'

export default function breadcrumb() {
  return (
    <Layout>
      <Breadcrumb
        style={{
          margin: '6px 0 6px 24px',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">用户管理</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">应用管理</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>角色管理</Breadcrumb.Item>
      </Breadcrumb>
    </Layout>
  )
}