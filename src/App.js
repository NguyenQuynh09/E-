import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/Compoment/Navigation/Navigation';
import HomePage from './Customer/pages/HomePage/HomePage';
import Footer from './Customer/Compoment/Footer/Footer';
import Product from './Customer/Compoment/Product/Product';
import ProductDetails from './Customer/Compoment/ProductDetails/ProductDetails';
import Cart from './Customer/Compoment/Cart/Cart';
import Checkout from './Customer/Compoment/Checkout/Checkout';


function App() {
  return (
    <div className="">
      <Navigation/>
   <div>
    {/* {<HomePage/>} */}
    {/*<Product/>*/}
    {/*<ProductDetails/>*/}
    {/*<Cart/>*/}
    <Checkout/>
   </div>
   <Footer/>
    </div>
  );
}

export default App;
