import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'
import About from './pages/About';
import Product from './pages/Product';
import Layout from './Layout/Layout';

function App() {
  return (
    <div>
      <Router>
      
         <Routes>
           <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/contact' element={<Contact/>} />
           </Route>
         </Routes>
        
      </Router>
    </div>
  );
}

export default App;
