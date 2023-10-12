'use client'

import Link from "next/link"
import {useRouter} from 'next/navigation'

const Login = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Login Page</h1>
            {/* Linking */}
            <Link href="/">Go To Home Page</Link><br/><br/>
            {/* Navigation */}
            <button onClick={()=>router.push("/")}>Go To Home Page</button>
        </div>
    )
}

export default Login