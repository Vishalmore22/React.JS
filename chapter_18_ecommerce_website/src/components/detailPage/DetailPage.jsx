import React from 'react'
import { useLocation } from "react-router";

export default function DetailPage() {
    const { state } = useLocation();
    console.log(state);

    return (
        <div>
            <div className='container border d-flex flex-row mt-5 shadow'>
                <div className='col-6'>
                    <img src={state.image} className='w-75' alt="" />
                </div>
                <div className='col-6 p-5 '>
                    <h1>{state.name}</h1>
                    <p className='fs-2 fw-light text-success'>${state.price}</p>
                    <p className='fs-4 fw-lighter'>{state.des}</p>
                    <p className='fs-4 fw-lighter'>{state.cate}</p>
                    {/* <div>
                    <button className="btn btn-outline-primary mx-1 w-100   " onClick={() => addTocart({ name, image })}>Add to Cart</button>
                </div> */}
                </div>
            </div>
        </div>
    )
}
