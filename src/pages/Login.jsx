import React from 'react'

export default function Login() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='p-4 border flex gap-4 flex-col items-center justify-center w-70 h-60 rounded'>
                <input type="text" placeholder='name' className='border border-gray-400 p-2 rounded' />
                <input type="email" placeholder='email@example.com' className='border border-gray-400 p-2 rounded' />
                <button className='px-4 py-1 text-white rounded bg-blue-500 '>Login</button>
            </div>
        </div>
    )
}
