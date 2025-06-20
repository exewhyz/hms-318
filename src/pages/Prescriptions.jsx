import React from 'react'
import { useData } from '../context/dataContext'

export default function Prescriptions() {

    const { prescriptions } = useData();

    return (
        <div className=''>
            <h1 className='font-bold text-4xl'>Precriptions</h1>
            <div className='flex flex-col gap-4 mt-2'>
                {
                    prescriptions.map((pres) => {
                        return (
                            <div className='flex gap-4 border-b-2 last:border-none'>
                                <p className=''>Doctor: {pres.doctor}</p>
                                <p>Details: {pres.details}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
