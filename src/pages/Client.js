
import SiderMenu from "../components/SiderMenu"
import List from "../components/List"
import Transfer from "./Transfer";
import Deposit from "./deposit";
import Withdraw from "./Withdraw";
import DealLog from "./DealLog";

import { Layout } from 'antd';
import { Route, Routes, Navigate } from "react-router-dom";
const { Content, Sider } = Layout;

const Client = () => {
  return (
    <>
      <Layout>
        <Sider width={200} style={{backgroundColor:'#ffffff'}}>
          <SiderMenu ></SiderMenu>
        </Sider>
        <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="transfer" />}></Route>
              <Route path="/transfer/*" element={<Transfer/>}></Route>
              <Route path="deposit" element={<Deposit/>}></Route>
              <Route path="withdraw" element={<Withdraw/>}></Route>
              <Route path="deallog" element={<DealLog/>}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default Client