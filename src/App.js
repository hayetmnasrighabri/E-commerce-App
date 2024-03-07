import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Slider from './components/slider';
import { Route, Routes } from 'react-router-dom';
import ProductsDetails from './components/ProductsDetails';
import About from './components/About';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={
        <>
         <Slider/>
         <ProductList/>
        </>
      }
      />
      <Route path='About' element={<About/>}/>
      <Route path='product/:productId' element={<ProductsDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
