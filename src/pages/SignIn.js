import { useState, useEffect, useRef, useContext } from 'react'
import axios from 'axios';
import AuthContext from '../context/AuthProvider';
const SignIn = () => {
    const userRef = useRef();
    const errorRef = useRef();
    const {auth, setAuth} = useContext(AuthContext);
    

    const [userInput, setUserInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const urlSignIn = 'http://localhost:4000/users'

    useEffect(() => {
        userRef.current.focus();

    },[])

    useEffect(() => {
        setErrorMsg('');
    }, [userInput, passwordInput])

    const handleSubmit = async (e) => { 
        e.preventDefault();

        try { 
            const response = await axios.get(urlSignIn);
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            let seen = false;
            let index = 0;
            let users = response.data
            for (; index < users.length; index++) { 
                let user = users[index]
                if ((user["email"] === userInput) && (user["password"] === passwordInput)) { 
                    setSuccess(true);
                    setUserInput("");
                    setPasswordInput("");     
                    setAuth(user);
                    seen = true;
                    window.localStorage.setItem('LEETCLONE_AUTH', JSON.stringify(user));
                    break;
                }
            }
            if (!seen) { 
                setErrorMsg("Username or Password is Incorrect");
                errorRef.current.focus();
            }


        } catch (err){
            if (!err?.response) { 
                setErrorMsg('No Server Response')
            } else if (err.response?.status === 400) { 
                setErrorMsg('Missing Username or Password')
            } else if (err.response?.status === 401) { 
                setErrorMsg('Unauthorized')
            } else {
                setErrorMsg('Login Failed')
            }
            errorRef.current.focus();
        }
    }
    return (
        <>
            {success ? 
                (
                    <div>
                        <h1>Welcome back {auth.username}!</h1>
                        <br></br>
                        <a href='/'>Go to Home</a>

                    </div>
                
                ) : (

                <section className='sign_in_form'>
                    <p ref={errorRef} className={errorMsg ? "errorMsg" : "offscreen"} aria-live="assertive">{errorMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='email'>Email:</label>
                        <br></br>
                        <input 
                            placeholder='...' 
                            type='text' 
                            id='email'
                            autoComplete='off'
                            ref={userRef}
                            onChange={(e) => {setUserInput(e.target.value)}}
                            value={userInput}
                            required
                        ></input>
                        <br></br>
                        <label htmlFor='password'>Password:</label>
                        <br></br>
                        <input 
                            placeholder='...' 
                            type='password'  //change to type password
                            id='password'
                            autoComplete='off'
                            onChange={(e) => {setPasswordInput(e.target.value)}}
                            value={passwordInput}
                            required
                        ></input>
                        <br></br>
                        <br></br>
                        <button>Log In</button>
                    </form>
                    <p>Need An Account?</p>
                    <a href='/signup'>Sign Up</a>
        
                
                </section>)}
            </>
    )
}

export default SignIn
