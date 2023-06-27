'use client'

import Logo from "./components/logo";
import Departure from "./components/departure";
import Destination from "./components/destination";
import {useState} from "react";

export default function Home() {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');

    const show = () => {
        console.log(departure, destination)
    }
  return (
    <main>
        <Logo/>
        <Departure setValue={setDeparture}/>
        <Destination setValue={setDestination}/>
        <button onClick={show}>Submit</button>
    </main>
  )
}