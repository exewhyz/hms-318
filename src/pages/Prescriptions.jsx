import React from 'react'

export default function Prescriptions() {

    const prescriptions = [
        {
            id: 1,
            doctor: "Dr. Abhishek",
            details: "bidjhffhmugik"
        },
        {
            id: 2,
            doctor: "Dr. Harshvardhan",
            details: "mugidsjfdsk"
        },
        {
            id: 3,
            doctor: "Dr. Akarshan",
            details: "urefhojpe'wl"
        }
    ]


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
