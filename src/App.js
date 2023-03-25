import './App.css';
import React from 'react';
import { Home } from './Home';
import { AddProduct } from './Addproduct';
import { EditProduct } from './Editproduct';
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add-product" element={<AddProduct/>}/>
    <Route path="/edit-product/:id" element={<EditProduct/>} />
    </Routes>
    </>
  );
}



export default App;
