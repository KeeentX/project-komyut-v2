'use client'

import Link from "next/link";
import {useState} from "react";

export default function Destination(props) {
  return (
      <main>
          <input type="text" placeholder="destination" onChange={(e) => props.setDestination(e.target.value)}/>
      </main>
  )
}