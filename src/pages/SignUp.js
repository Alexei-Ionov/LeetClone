import React from 'react'
import { useState, useEffect, useRef, useContext} from 'react'
import axios from 'axios';
import AuthContext from '../context/AuthProvider';

const SignUp = () => {
  const url = 'http://localhost:4000/users'
  const [emailInput, setemailInput] = useState("");
  const [usernameInput, setusernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [status, setStatus] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const errorRef = useRef();
  const {setAuth} = useContext(AuthContext);


  ///FOR PROBLEMS: 0 indicates haven't attempted, 1 indicates attempted but haven't solved, 2 indicates solved!
  //use id to index into problems. probelms[id] = [completedness state, code-saved]

  useEffect(() => { 
  }, [status])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const info = {
      email: emailInput, 
      username: usernameInput,
      password: passwordInput,
      problems: new Array(2).fill([0, "", ""]),
      ai: false,
      prevCode: "", 
      prevLanguage: ""
    }
    try { 
      const res = await axios.post(url, info);
      const accessToken = res?.data?.accessToken;
      const roles = res?.data?.roles;

      if (res.data === 0) { 
        setErrorMsg('Account Already Exists')
        errorRef.current.focus();
      } else if (res.data === 1) { 
        setemailInput("");
        setusernameInput("");
        setPasswordInput("");
        setStatus(true);
      }

    } catch(err) { 
      if (!err?.res) { 
          setErrorMsg('No Server res')
      } else if (err.res?.status === 400) { 
          setErrorMsg('Missing Username or Password')
      } else if (err.res?.status === 401) { 
          setErrorMsg('Unauthorized')
      } else {
          setErrorMsg('Login Failed')
      }
      errorRef.current.focus();
    }
  }
  
  return (
    <>
    {status ? (
      <div>
        <h1>You Are All Set!</h1>
        <a href='/signin'>Login</a>
      </div>
    ) : 
    
      <section className='sign_in_form'>
        <h1>SIGN UP!</h1>
        <form>
          <label htmlFor='email'>Email:</label>
          <br></br>
          <input 
              placeholder='...@gmail.com' 
              type='text' 
              id='email'
              autoComplete='off'
              //ref={userRef}
              onChange={(e) => {setemailInput(e.target.value)}}
              value={emailInput}
              required
          ></input>
          <br></br>
          <br></br>
          <label htmlFor='username'>Username:</label>
          <br></br>
          <input 
              placeholder='dirty dog...' 
              type='text' 
              id='username'
              autoComplete='off'
              //ref={userRef}
              onChange={(e) => {setusernameInput(e.target.value)}}
              value={usernameInput}
              required
          ></input>
          <br></br>
          <br></br>
          <label htmlFor='password'>Password:</label>
          <br></br>
          <input 
              placeholder='...' 
              type='text'  //change to type password
              id='password'
              autoComplete='off'
              onChange={(e) => {setPasswordInput(e.target.value)}}
              value={passwordInput}
              required
          ></input>
          <br></br>
        </form>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>

        
      </section>
      }
    </>
  )
}
export default SignUp
