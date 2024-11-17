import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Footer from './component/Footer';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
