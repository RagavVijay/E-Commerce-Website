import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import ProductMain from './Pages/ProductMain';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails';
import About from "./Pages/About";
import Contact from './Pages/Contact';
import Login from "./Pages/Login";
import Register from './Pages/Register';
import Cart from "./Pages/Cart";
import { Provider } from 'react-redux';
import store  from './ReduxForCart/store';
import Checkout from './Pages/Checkout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/product" element={<ProductMain/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
