import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Signed Up")
    }

    return (
        <div className='h-full flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='p-6 bg-green-100/30 rounded-lg flex gap-4 flex-col items-center justify-center w-90'>
                <h2 className='font-bold text-2xl'>Register</h2>
                <input type="text" placeholder='Name' className='border border-gray-400 p-2 w-full rounded' />
                <input type="email" placeholder='email@example.com' className='border border-gray-400 p-2 w-full rounded' />
                <input type="number" placeholder='Age' className='border border-gray-400 p-2 w-full rounded' />
                <input type="text" placeholder='Gender(M/F)' className='border border-gray-400 p-2 w-full rounded' />
                <input type="number" placeholder='Mobile Number' className='border border-gray-400 p-2 w-full rounded' />
                <input type="password" placeholder='password' className='border border-gray-400 p-2 w-full rounded' />
                <input type="text" placeholder='confirm password' className='border border-gray-400 p-2 w-full rounded' />
                <button
                    type='submit'
                    className='px-4 py-1 w-full text-white rounded bg-green-500 '
                >
                    Register
                </button>
                <Link to={"/login"} className='text-sm text-gray-400 hover:text-gray-500'>
                    Already have an Account, Login!
                </Link>
            </form>
        </div>
    )
}
