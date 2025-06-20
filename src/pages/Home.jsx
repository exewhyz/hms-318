import React from 'react'
import Card from "../components/Card.jsx"
import { useAuth } from '../context/authContext.jsx'

export default function Home() {
    const appointments = [
        {
            id: 1,
            doctor: "Dr. Abhishek",
            date: "2025-05-24",
            time: "10:20 AM"
        },
        {
            id: 2,
            doctor: "Dr. Akarshan",
            date: "2025-09-24",
            time: "10:20 AM"
        },
        {
            id: 3,
            doctor: "Dr. Harshvardhan",
            date: "2025-10-24",
            time: "10:30 AM"
        }
    ]

    const upcommingAppointments = appointments.filter(((appt) => new Date(appt.date) > Date.now()))
    const pastAppointments = appointments.filter(((appt) => new Date(appt.date) < Date.now()))

    return (
        <div className='flex flex-col gap-8'>
            <section>

                <h1 className='font-bold text-4xl'>Upcoming Appointments</h1>
                <div className='flex flex-wrap gap-6 p-6'>
                    {
                        upcommingAppointments.map((appt) => {
                            return (
                                <Card
                                    key={appt.id}
                                    doctor={appt.doctor}
                                    date={appt.date}
                                    time={appt.time}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section>
                <h1 className='font-bold text-4xl'>Past Appointments</h1>
                <div className='flex flex-wrap gap-6 p-6'>
                    {
                        pastAppointments.map((appt) => {
                            return (
                                <Card
                                    key={appt.id}
                                    doctor={appt.doctor}
                                    date={appt.date}
                                    time={appt.time}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
