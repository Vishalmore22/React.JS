import React from "react"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from "react-router";
import User from "./components/User/User";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/user' element={<User />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}