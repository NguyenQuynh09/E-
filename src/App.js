import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/Compoment/Navigation/Navigation';
import HomePage from './Customer/pages/HomePage/HomePage';
import Footer from './Customer/Compoment/Footer/Footer';
import Product from './Customer/Compoment/Product/Product';
import ProductDetails from './Customer/Compoment/ProductDetails/ProductDetails';
import Cart from './Customer/Compoment/Cart/Cart';
import Checkout from './Customer/Compoment/Checkout/Checkout';
import Order from './Customer/Compoment/Order/Order';
import OrderDetail from './Customer/Compoment/Order/OrderDetail';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';


function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
      <Navigation/>   
    </div>
  );
}

export default App;
