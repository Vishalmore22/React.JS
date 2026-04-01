import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import DetailPage from './components/detailPage/DetailPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </div>
  )
}
