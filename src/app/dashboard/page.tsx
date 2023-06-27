"use client"

import {useState} from "react";

export default function Dashboard() {
    const [departure, setDeparture] = useState('');
    const [depType, setDepType] = useState('');
    const [destination, setDestination] = useState('');
    const [desType, setDesType] = useState('');
    const [routeCode, setRouteCode] = useState('');
    const [distance, setDistance] = useState(0);
    const [fare, setFare] = useState(0);

    const validateEntry = async () => {
        const data = {departure, depType, destination, desType, routeCode, distance, fare};
        const response = await fetch('api/route/validator', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        response.json().then((data) => {
            console.log(data)
        })
    }
    return (
        <main>
            <input type="text" placeholder="Departure" onChange={(e) => setDeparture(e.target.value)}/>
            <input type="text" placeholder="Place Type" onChange={(e) => setDepType(e.target.value)}/>
            <input type="text" placeholder="Destination" onChange={(e) => setDestination(e.target.value)}/>
            <input type="text" placeholder="Place Type" onChange={(e) => setDesType(e.target.value)}/>
            <input type="text" placeholder="Route Code" onChange={(e) => setRouteCode(e.target.value)}/>
            <input type="number" placeholder="Distance" onChange={(e) => setDistance(e.target.valueAsNumber)}/>
            <input type="number" placeholder="Fare" onChange={(e) => setFare(e.target.valueAsNumber)}/>
            <button onClick={validateEntry}>Submit</button>
        </main>
    )
}