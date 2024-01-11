import React from 'react'
import LoginReq from './LoginReq'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import ProblemsList from '../components/ProblemsList'
import Row from '../components/Row'
const Problems = () => {
  const {auth} = useContext(AuthContext);
  const len = Object.keys(auth).length
  return (
    <>
      {!len ? (<LoginReq/>) : (
        <div>
          <h1>Problems</h1>
          <Row/>
          <ProblemsList/>
        </div>
        )
      }
    </>
  )
}

export default Problems
