import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from '../Component/Homepage'
import Login from '../Component/Login'
import Register from '../Component/Register'

import Signup from '../Component/Signup'
import ProductDetail from '../Component/ProductDetail'
import Payment from '../payment/payment'
import AddressPage from '../payment/Address'
import PaymentForm from '../payment/PaymentForm'
import PaymentSucc from '../payment/PaymentSucc'

const AllRoutes = () => {
  return (
    <>
     <Routes>
     <Route path='/' element={<Homepage/>}></Route>
     <Route path='/:id' element={<ProductDetail/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/payment" element={<Payment/>}></Route>
     <Route path="/paymentform" element={<PaymentForm/>}></Route>
     <Route path="/address" element={<AddressPage/>}></Route>
     <Route path="/paymentsuccesful" element={<PaymentSucc />}></Route>
     </Routes> 
    </>
  )
}

export default AllRoutes


