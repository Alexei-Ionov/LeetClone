import React from 'react'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthProvider'
import SignIn from './SignIn';

const Profile = () => {

    const {setAuth} = useContext(AuthContext);
    const [loggedIn, setLoggedIn] = useState(true)
    const logout = () => {
        setAuth({});
        window.localStorage.removeItem('LEETCLONE_AUTH');
        setLoggedIn(false);
    }
    
    return (

        <>
            {!loggedIn ? <SignIn/> : (
                <div>
                    <h1>Profile</h1>
                    <button onClick={logout}>Log Out</button>
                </div>
            )
            }
         </>
    )
}

export default Profile
