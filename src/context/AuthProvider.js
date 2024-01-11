import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});

    useEffect(() => { 
        const data = window.localStorage.getItem('LEETCLONE_AUTH');
        if (data !== null) { 
            setAuth(JSON.parse(data));
        }
    }, [])


    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

