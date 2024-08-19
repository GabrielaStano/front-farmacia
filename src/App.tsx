
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navBar/NavBar';
import ProductList from './components/products/productList/ProductList';
import DeleteProduct from './components/products/productDelete/ProductDelete';
import ProductForm from './components/products/productForm/ProductForm';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[50vh] p-0 m-0'>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/productForm" element={<ProductForm />} />
          <Route path="/editProduct/:id" element={<ProductForm />} />
          <Route path="/deleteProduct/:id" element={<DeleteProduct />} />
          </Routes>
        </div>
        <Footer  />
      </BrowserRouter>
    </>
  );
}

export default App