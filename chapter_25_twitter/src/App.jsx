import React from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import { Route, Routes } from 'react-router'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}
