import React from 'react'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import { Route, Routes } from 'react-router'
import Home from '../screens/Home'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}
