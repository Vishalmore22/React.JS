import React from 'react'
import { useLocation } from "react-router";

export default function DetailPage() {
    const state = useLocation();
    return (
        <div>
            <h1>DetailPage</h1>
            <p>{state.name}</p>
        </div>
    )
}
