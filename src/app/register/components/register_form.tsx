"use client"

import {useState} from "react";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import {PrismaClient} from "@prisma/client";

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');

    const validateReg = async () => {
        const data = {email, password, confirm_password}
        const response = await fetch('api/auth/register', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        response.json().then((data) => {
            switch (data) {
                case -1:
                case 0:
                case 1:
            }
        })
    }
    return (
        <main>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm password"/>
            <button onClick={validateReg}>Submit</button>
        </main>

    )
}