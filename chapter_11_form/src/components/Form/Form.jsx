import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function Form() {
    const navigate = useNavigate();

    const [user, setUser] = useState({})
    const [check, setCheck] = useState(false);
    const nameRegex = /^[A-Za-z ]{3,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex = /^[6-9]\d{9}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%^&*!]{6,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nameRegex.test(user.name || "")) {
            alert("Invalid Name");
            return;
        }

        if (!emailRegex.test(user.email || "")) {
            alert("Invalid Email");
            return;
        }

        // if (!contactRegex.test((user.contact || "").trim())) {
        //     alert("Invalid Contact Number");
        //     return;
        // }

        if (!passwordRegex.test(user.password || "")) {
            alert("Invalid Password");
            return;
        }
        const users = JSON.parse(localStorage.getItem("users")) || []; // []
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Form Submitted !!")
        navigate("/home");
    };

    return (
        <div style={{ height: "100vh" }} className='container d-flex justify-content-center align-items-center'>
            <div className='col-3'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="number" className="form-label">
                            Contact
                        </label>
                        <input
                            onChange={(e) => setUser({ ...user, contact: e.target.value })}
                            type="text"
                            maxLength={10}
                            className="form-control"
                            id="number"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fees" className="form-label">
                            Fees
                        </label>
                        <input
                            onChange={(e) => setUser({ ...user, fees: e.target.value })}
                            type="number"
                            className="form-control"
                            id="fees"
                            aria-describedby="emailHelp"
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" checked={check} onChange={() => setCheck(!check)} className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className={`btn btn-primary ${check ? "" : "disabled"}`}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}