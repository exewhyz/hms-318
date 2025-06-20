import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const prescriptionsData = [
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

const appointmentsData = [
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

export const DataProvider = ({ children }) => {

    const [appointments, setAppointments] = useState(appointmentsData);
    const [prescriptions, setPrescriptions] = useState(prescriptionsData);
    const [loadingData, setLoadingData] = useState(false);
    const [errorData, setErrorData] = useState(null);

    

    const addAppointment = async (appt) => {
        try {
            setLoadingData(true);
            setErrorData(null);
            //api call wth appt obj
            const newAppt = {
                id: Date.now(),
                ...appt
            }
            setAppointments((prev) => {
                return [
                    ...prev,
                    newAppt
                ]
            })
        } catch (error) {
            setErrorData("Error booking appointment: " + error.message)
            throw new Error("Error booking appointment: ", error)
        } finally {
            setLoadingData(false)
        }
    }

    return (
        <DataContext.Provider value={{ loadingData, errorData, appointments, addAppointment, prescriptions }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);