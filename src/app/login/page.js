'use client'
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const validateLogin = async () => {
        const data = {email, password}
        const response = await fetch('api/auth/login', {
                method: 'POST',
                body: JSON.stringify(data),
            });
        response.json().then((data) => {
            if(data) {
                router.push('/dashboard');
            } else {
                console.log("Response", data.responseType);
            }
        })
    }

    return (
        <main>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
            <button type="submit" onClick={validateLogin}>Submit</button>
        </main>
    )
}