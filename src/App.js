import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/Compoment/Navigation/Navigation';
import HomePage from './Customer/pages/HomePage/HomePage';
import Footer from './Customer/Compoment/Footer/Footer';
import Product from './Customer/Compoment/Product/Product';



function App() {
  return (
    <div className="">
      <Navigation/>
   <div>
    {/* {<HomePage/>} */}
    <Product/>
   </div>
   <Footer/>
    </div>
  );
}

export default App;
