import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <header>
            <nav className='flex h-14 px-4 py-2 bg-amber-100 items-center justify-between'>
                <div>
                    <Link to={"/"} className='font-bold text-3xl text-blue-500'>
                        MA<span className='text-red-500'>X</span>
                    </Link>
                </div>
                <div className='flex gap-4'>
                    <Link to={"/appointment-booking"}>Appointment</Link>
                    <Link to={"/prescriptions"}>Prescriptions</Link>
                </div>
                <div className='flex gap-4'>
                    <Link className='bg-blue-400 px-4 py-2 rounded-lg ' to={"login"}>
                        Login
                    </Link>
                    <Link className='bg-green-400 px-4 py-2 rounded-lg' to={"/register"}>
                        Register
                    </Link>
                </div>
            </nav>
        </header>
    )
}
