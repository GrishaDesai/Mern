import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar';
import MainComponent from './components/Maincomponent.jsx';
import Home from '../src/pages/Home.jsx';
import Signup from '../src/pages/Signup.jsx';
import Login from '../src/pages/Login.jsx';
import Product from './pages/Product.jsx';
import ProductAdd from './pages/ProductAdd.jsx';
import ProductEdit from './pages/ProductEdit.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

function App() {
  return (
    // <BrowserRouter>
    //   <div className="flex">
    //     <Sidebar />
    //     <div className="flex-1">
    //       <Navbar />
    //       <MainComponent>
    //         <Routes>
    //           <Route path="/" element={<Home />} />
    //           <Route path="/home" element={<Home />} />
    //           <Route path="/signup" element={<Signup />} />
    //         </Routes>
    //       </MainComponent>
    //     </div>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainComponent />}>
          <Route index element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<Product/>}/>
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/productAdd' element={<ProductAdd />} />
          <Route path='/productEdit/:id' element={<ProductEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
