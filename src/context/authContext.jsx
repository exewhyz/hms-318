import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

const getUserFromLocal = () => {
    return localStorage.getItem("user") ?? null;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getUserFromLocal);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const isAuthenticated = !!user;

    const login = (email, password) => {
        try {
            setLoading(true);
            setError(null)
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
            localStorage.setItem("user", JSON.stringify(mockUser))
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    const register = (userData) => {
        try {
            setLoading(true);
            setError(null);
            //fetch api call
            if (userData.password !== userData.cPassword) {
                setError("Password and Confirm Password not matched")
                throw new Error("Password and Confirm Password not matched")
            }
            const mockUser = {
                id: Date.now(),
                ...user
            }
            delete mockUser.password;
            setUser(mockUser)
            localStorage.setItem("user", JSON.stringify(mockUser))
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
        <AuthContext.Provider value={{ isAuthenticated, loading, error, user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);