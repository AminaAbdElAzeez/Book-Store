import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root.jsx';
import Home from './routes/Home';
import Authors from './routes/Authors/Authors.jsx';
import About from './routes/About/About.jsx';
import Contact from './routes/Contact/Contact.jsx';
import Register from './routes/Form/Register.jsx';
import Login from './routes/Form/Login.jsx';
import Book from './routes/Book/Book.jsx';
import Cart from './routes/Cart/Cart.jsx';
import CartProvider from '../src/Context/CartProvider.jsx';
import ErrorPage from './routes/ErrorPage/ErrorPage.jsx';

const routes = createBrowserRouter([
  {
   path : '/',
   element : <Root/>,
   errorElement : <ErrorPage/>,
   children : [
    { index : true, element : <Home/> },
    { path : 'home', element : <Home/> },
    { path : 'authors', element : <Authors/> },
    { path : 'about', element : <About/> },
    { path : 'contact', element : <Contact/> },
    { path : 'register', element : <Register/> },
    { path : 'cart', element : <Cart/> },
    { path : 'login', element : <Login/> },
    { path : 'book/:id', element : <Book/> },
   ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <RouterProvider router={routes}/>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
