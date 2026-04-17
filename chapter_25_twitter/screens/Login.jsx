import axios from 'axios';
import React, { useState } from 'react'
import { users_api } from '../utils/api'
import { useNavigate } from 'react-router';

export default function Login() {
    const [user, setUser] = useState({});
    const Navigate = useNavigate()

    const handleLogin = async () => {
        const res = await axios.get(users_api)
        const loginUser = res.data.find((e) => e.email == user.email && e.password == user.password)
        if (loginUser) {
            localStorage.setItem("current-user", JSON.stringify(loginUser));
            alert("Login Successfully ! ")
            Navigate("/home")
        }
        else {
            alert("Login failed !!")
        }
    }

    return (
        <div>
            <div className='container w-50'>
                <ul className='text-center mt-5 p-5 rounded-3 shadow gap-4 card bg-dark'>
                    <i className="bi bi-twitter-x text-white fs-4"></i>
                    <h3 className='fw-bolder text-white'>Log-In</h3>
                    <li>
                        <input type="text" placeholder='Email' onChange={(e) => setUser({ ...user, email: e.target.value })} className='rounded-4 p-2 w-50 border-0 shadow bg-dark text-light' />
                    </li>
                    <li>
                        <input type="text" placeholder='Password' onChange={(e) => setUser({ ...user, password: e.target.value })} className='rounded-4 p-2 w-50 border-0 shadow bg-dark text-light' />
                    </li>
                    <li>
                        <button className='btn btn-light text-dark px-5' onClick={handleLogin}>Log In</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
