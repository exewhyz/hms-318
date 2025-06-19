import React from 'react'

export default function Card({ doctor, date, time }) {
    return (
        <div 
            className='bg-amber-100/50 w-60 h-50 flex flex-col justify-center items-center gap-4 rounded-lg'
        >
            <h2 className='font-semibold text-2xl'>
                {doctor}
            </h2>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
        </div>
    )
}
