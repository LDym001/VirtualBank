import HeaderCpn from '../components/HeaderCpn'
import Client from './Client';
import Server from './Server';

import { Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HeaderCpn/>
      <Routes>
        <Route path='/client/*' element={<Client/>}></Route>
        <Route path='server' element={<Server/>}></Route>
      </Routes>
    </>
  )
}

export default Home