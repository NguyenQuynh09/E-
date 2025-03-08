import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/pages/HomePage/HomePage'
import Cart from '../Customer/Compoment/Cart/Cart'
import Navigation from '../Customer/Compoment/Navigation/Navigation'
import Footer from '../Customer/Compoment/Footer/Footer'
import Product from '../Customer/Compoment/Product/Product'
import ProductDetails from '../Customer/Compoment/ProductDetails/ProductDetails'
import Checkout from '../Customer/Compoment/Checkout/Checkout'
import Order from '../Customer/Compoment/Order/Order'
import OrderDetail from '../Customer/Compoment/Order/OrderDetail'


const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>

            <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/register' element={<HomePage/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>



    {/* <Order/> */}
    {/* <OrderDetail/> */}

        </Routes>
        <div>
        <Footer/>
        </div>
        </div>
  )
}

export default CustomerRouters