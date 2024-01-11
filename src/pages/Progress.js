import React from 'react'
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import LoginReq from './LoginReq';
const Progress = () => {
  const {auth} = useContext(AuthContext);
  const len = Object.keys(auth).length
  return (
    <>
      {!len ? (<LoginReq/>) : (
        <div>
          <h1>Progress</h1>
        </div>
        )
      }
    </>
  )
}

export default Progress
