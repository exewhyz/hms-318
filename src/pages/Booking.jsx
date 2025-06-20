import React, { useState } from 'react'
import { useData } from '../context/dataContext';

export default function Booking() {
    const { addAppointment } = useData();
    const [appointment, setAppointment] = useState({
        doctor: "",
        date: "",
        time: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addAppointment(appointment)
        setAppointment({});
    }
    const handleChange = (e) => {
        setAppointment((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className='flex items-center justify-center h-full'>
            <form onSubmit={handleSubmit} className='w-90 bg-cyan-100/30 rounded-lg flex flex-col gap-4 items-center justify-center p-6'>
                <h2 className='font-bold text-2xl'>Appointment Booking</h2>
                <select name="doctor" value={appointment.doctor} onChange={handleChange} id="doctor" className='px-2 py-1 w-full border border-gray-400 rounded-lg'>
                    <option value="Dr. Abhishek">Dr. Abhishek</option>
                    <option value="Dr. Akarshan">Dr. Akarshan</option>
                    <option value="Dr. Harshvardhan">Dr. Harshvardhan</option>
                </select>
                <input name='date' value={appointment.date} onChange={handleChange} type="date" className='px-2 py-1 w-full border border-gray-400 rounded-lg' />
                <input name='time' value={appointment.time} onChange={handleChange} type="time" className='px-2 py-1 w-full border border-gray-400 rounded-lg' />
                <button type='submit' className="w-full px-2 py-1 bg-cyan-500/70 rounded-lg">
                    Book Appointment
                </button>
            </form>
        </div>
    )
}
