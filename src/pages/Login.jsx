import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Logged In")
    }

    return (
        <div className='h-full flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='p-6 bg-blue-100/30 rounded-lg flex gap-4 flex-col items-center justify-center w-90 h-60'>
                <h2 className='font-bold text-2xl'>Login</h2>
                <input type="email" placeholder='email@example.com' className='border border-gray-400 p-2 w-full rounded' />
                <input type="password" placeholder='password' className='border border-gray-400 p-2 w-full rounded' />
                <button
                    type='submit'
                    className='px-4 py-1 w-full text-white rounded bg-blue-500 '
                >
                    Login
                </button>
                <Link to={"/register"} className='text-sm text-gray-400 hover:text-gray-500'>
                    Not have an Account, Register!
                </Link>
            </form>
        </div>
    )
}
