"use client"
import Link from "next/link";
import {useState} from "react";

export default function Departure(props) {
    const [departure, setDeparture] = useState('')
    return (
        <main>
            <input id="departure" type="text" placeholder='Enter Departure' onChange={(e) => props.setValue(e.target.value)}/>
        </main>
    )
}