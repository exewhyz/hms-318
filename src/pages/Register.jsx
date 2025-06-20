import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext.jsx';

export default function Register() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        mobile: "",
        password: "",
        cPassword: ""
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const { register, loading, isAuthenticated } = useAuth();
    const redirect = useNavigate();

    useEffect(() => {
        if (isAuthenticated) redirect("/");
    }, [isAuthenticated]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(userData);
    }

    return (
        <div className='h-full flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='p-6 bg-green-100/30 rounded-lg flex gap-4 flex-col items-center justify-center w-90'>
                <h2 className='font-bold text-2xl'>Register</h2>
                <input name='name' value={userData.name} onChange={handleChange} type="text" placeholder='Name' className='border border-gray-400 p-2 w-full rounded' />
                <input name='email' value={userData.email} onChange={handleChange} type="email" placeholder='email@example.com' className='border border-gray-400 p-2 w-full rounded' />
                <input name='age' value={userData.age} onChange={handleChange} type="number" placeholder='Age' className='border border-gray-400 p-2 w-full rounded' />
                <input name='gender' value={userData.gender} onChange={handleChange} type="text" placeholder='Gender(M/F)' className='border border-gray-400 p-2 w-full rounded' />
                <input name='mobile' value={userData.mobile} onChange={handleChange} type="number" placeholder='Mobile Number' className='border border-gray-400 p-2 w-full rounded' />
                <input name='password' value={userData.password} onChange={handleChange} type="password" placeholder='password' className='border border-gray-400 p-2 w-full rounded' />
                <input name='cPassword' value={userData.cPassword} onChange={handleChange} type="text" placeholder='confirm password' className='border border-gray-400 p-2 w-full rounded' />
                <button
                    disabled={loading}
                    type='submit'
                    className='px-4 py-1 w-full text-white rounded bg-green-500 '
                >
                    {loading ? "Registering User" : "Register"}
                </button>
                <Link to={"/login"} className='text-sm text-gray-400 hover:text-gray-500'>
                    Already have an Account, Login!
                </Link>
            </form>
        </div>
    )
}
