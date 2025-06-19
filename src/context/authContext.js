import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const login = (email, password) => {
        try {
            setLoading(true);
            //fetch api call
            const mockUser = {
                id: Date.now(),
                name: "Aniket",
                email: email,
                age: 15,
                gender: "M",
                mobile: 9876543210
            }
            setUser(mockUser)
            localStorage.setItem("user", mockUser)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    const register = (user) => {
        try {
            setLoading(true);
            //fetch api call
            const mockUser = {
                id: Date.now(),
                ...user
            }
            delete mockUser.password;
            setUser(mockUser)
            localStorage.setItem("user", mockUser)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user")
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext();