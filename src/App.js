import './App.css';
import React from 'react';
import { Home } from './Home';
import { AddProduct } from './Addproduct';
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add-product" element={<AddProduct/>}/>
    </Routes>
    </>
  );
}



export default App;
