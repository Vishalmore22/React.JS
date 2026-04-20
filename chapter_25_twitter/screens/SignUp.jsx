import { useState } from 'react'
import '../src/App.css'
import axios from "axios"; // this is for api. 
import { users_api } from "../utils/api.js"//import api link from api.js.

export default function SignUp() {
    // craete a useState/variable for store user-input data.
    const [user, setUser] = useState({})//why use -> {} we have maltiple date to store that's why use it.
    const nameRegex = /^[A-Za-z ]{3,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%^&*!]{6,}$/;

    // create a SignUp function outside of UI component.
    const handleSignup = async () => {

        if (!nameRegex.test(user.name || "")) {
            alert("Invalid Name");
            return;
        }

        if (!emailRegex.test(user.email || "")) {
            alert("Invalid Email");
            return;
        }
        if (user.phone >= 9999999999 || "") {
            alert("Invalid contact");
            return;
        }
        if (!passwordRegex.test(user.password || "")) {
            alert("Invalid Password");
            return;
        }

        // check if email already exists in db.json
        const checkUser = await axios.get(`${users_api}?email=${user.email}`);

        if (checkUser.data.length > 0) {
            alert("This account already exists !");
            return;
        }

        // create user
        const res = await axios.post(users_api, user);//in post api method you have give link of api in string also which data you want to send you have metion it as well.
        if (res.status == 201) {
            alert("user signup successfully !!");
        }
        else {
            alert("cant signup user !");
        }


    }
    return (
        <div>
            {/* when we get data from user input we have to store it in useState variable and navigate to other. */}
            <div className='container w-50'>
                <ul className='text-center mt-5 p-4 rounded-5 shadow gap-4 card bg-dark'>
                    <i className="bi bi-twitter-x text-white fs-4"></i>
                    <h3 className='fw-bolder text-white'>Sign - Up</h3>
                    <li><input onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" className='rounded-4 p-2 w-50 border-0 shadow bg-dark text-light' placeholder='Full Name' /></li>
                    <li><input onChange={(e) => setUser({ ...user, email: e.target.value })} type="text" className='rounded-4 p-2 w-50 border-0 shadow bg-dark text-light' placeholder='Email' /></li>
                    <li><input onChange={(e) => setUser({ ...user, phone: e.target.value })} type="text" className='rounded-4 p-2 w-50 border-0 shadow bg-dark text-light' placeholder='Contact' /></li>
                    <li><input onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" className='rounded-4 p-2 w-50 border-0 shadow bg-dark text-light' placeholder='Password' /></li>
                    <li><button className='btn btn-light text-dark px-5' onClick={handleSignup}>Sign Up</button></li>
                    <hr className='text-white w-50 m-auto' />
                    <div>
                        <i className="bi bi-google text-light m-3 fs-5"></i>
                        <i className="bi bi-apple text-light fs-5"></i>
                    </div>
                    <p className='text-white'>Have an account already? <a href='/login' className='text-info'>Log in</a></p>
                </ul>
            </div>
        </div>
    )
}
