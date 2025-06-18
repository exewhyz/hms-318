import React from 'react'

export default function Booking() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Appointment Booked")
    }

    return (
        <div className='flex items-center justify-center h-full'>
            <form onSubmit={handleSubmit} className='w-90 bg-cyan-100/30 rounded-lg flex flex-col gap-4 items-center justify-center p-6'>
                <h2 className='font-bold text-2xl'>Appointment Booking</h2>
                <select name="doctor" id="doctor" className='px-2 py-1 w-full border border-gray-400 rounded-lg'>
                    <option>Dr. Abhishek</option>
                    <option>Dr. Akarshan</option>
                    <option>Dr. Harshvardhan</option>
                </select>
                <input type="date" className='px-2 py-1 w-full border border-gray-400 rounded-lg' />
                <input type="time" className='px-2 py-1 w-full border border-gray-400 rounded-lg' />
                <button type='submit' className="w-full px-2 py-1 bg-cyan-500/70 rounded-lg">
                    Book Appointment
                </button>
            </form>
        </div>
    )
}
