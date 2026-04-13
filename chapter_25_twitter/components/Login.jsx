import React from 'react'

export default function Login() {
    const handleLogin = async () => { 
        
    }
    return (
        <div>
            <div className='container w-50'>
                <ul className='text-center mt-5 p-5 rounded-3 shadow gap-4 card bg-dark'>
                    <i class="bi bi-twitter-x text-white fs-4"></i>
                    <h3 className='fw-bolder text-white'>Log-In</h3>
                    <li>
                        <input type="text" placeholder='Full Name' className='rounded-4 p-2 w-50 border-0 shadow bg-dark text-light' />
                    </li>
                    <li>
                        <input type="text" placeholder='Password' className='rounded-4 p-2 w-50 border-0 shadow bg-dark text-light' />
                    </li>
                    <li>
                        <button className='btn btn-light text-dark px-5'>Log In</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
