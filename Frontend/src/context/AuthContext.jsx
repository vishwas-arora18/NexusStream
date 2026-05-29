import { createContext, useState, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext({});

const client = axios.create({
    baseURL: "http://localhost:8000/api/v1/users" 
});

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null); 

    const handleRegister = async (name, username, password) => {
        try {
            let request = await client.post("/register", {
                name,
                username,
                password
            });
            if (request.status === 200 || request.status === 201) {
                return request.data.message;
            }
        } catch (err) {
            throw err;
        }
    };

    const handleLogin = async (username, password) => {
        try {
            let request = await client.post("/login", {
                username,
                password
            });
            if (request.status === 200) {
                localStorage.setItem("token", request.data.token);
                setUserData(request.data.user); 
                return request.data;
            }
        } catch (err) {
            throw err;
        }
    };
    const data = {
        userData,
        setUserData,
        handleRegister,
        handleLogin
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};