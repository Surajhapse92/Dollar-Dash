import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home.js';
import App from './App.js';
import Add from './views/AddTransition/Add.js'
import Login from './views/Login/Login.js';
import Signup from './views/Signup/Signup.js';
import Mytransition from './views/Mytransition/Mytransition.js';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Update from './views/Update/Update.js';

const  router = createBrowserRouter([
  {
    path: '/',
    element : <Home/>
  },
  {
    path: '/login',
    element : <Login/>
  },
  {
    path: '/app',
    element : <App/>
  },
  {
    path: '/signup',
    element : <Signup/>
  },
  {
    path: '/transition',
    element : <Mytransition/>
  },
  {
    path: '/add',
    element : <Add/>
  },
  {
    path: '/updateTransition/:id',
    element : <Update/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);


