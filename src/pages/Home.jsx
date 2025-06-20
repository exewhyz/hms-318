import React from 'react'
import Card from "../components/Card.jsx"
import { useData } from '../context/dataContext.jsx'

export default function Home() {
    const { appointments } = useData();

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
