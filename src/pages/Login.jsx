import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext.jsx';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login, loading, isAuthenticated } = useAuth();
    const redirect = useNavigate();

    useEffect(() => {
        if (isAuthenticated) redirect("/");
    }, [isAuthenticated]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (
        <div className='h-full flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='p-6 bg-blue-100/30 rounded-lg flex gap-4 flex-col items-center justify-center w-90 h-60'>
                <h2 className='font-bold text-2xl'>Login</h2>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder='email@example.com'
                    className='border border-gray-400 p-2 w-full rounded'
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='password'
                    className='border border-gray-400 p-2 w-full rounded'
                />
                <button
                    disabled={loading}
                    type='submit'
                    className='px-4 py-1 w-full text-white rounded bg-blue-500 '
                >
                    {loading ? "Logging In" : "Login"}
                </button>
                <Link to={"/register"} className='text-sm text-gray-400 hover:text-gray-500'>
                    Not have an Account, Register!
                </Link>
            </form>
        </div>
    )
}
