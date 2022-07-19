import { Routes, Route, Navigate } from 'react-router-dom'
import FormDe from '../components/FormDe'
import ComFirm from '../components/ComFirm'
import TransferSuc from '../components/TransferSuc'

const Transfer = () => {
  return (
    <>
      {/* <FormDe/> */}
      <Routes>
        <Route path="/" element={<FormDe/>}></Route>
        <Route path="formde" element={<FormDe/>}></Route>
        <Route path="comfirm" element={<ComFirm/>}></Route>
        <Route path="transfersuc" element={<TransferSuc/>}></Route>
      </Routes>
    </>
  )
}

export default Transfer