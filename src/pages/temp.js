import React from 'react'
import { useContext, useState, useEffect, useRef} from 'react'
import AuthContext from '../context/AuthProvider'
import LoginReq from './LoginReq'
import DropDown from '../components/DropDown'
import GetTimeComplexity from '../Functions/GetTimeComplexity'
import LoadingDots from '../components/LoadingDots'

const Tools = ({CODE, LANG}) => {
    const {auth} = useContext(AuthContext);
    const len = Object.keys(auth).length
    const [response, setResponse] = useState();
    const [code, setcode] = useState(CODE);
    const [language, setLanguage] = useState(LANG);
    const [load, setLoad] = useState(false);
    useEffect(() => { 

    }, [response])

    const handleSubmit = async (e) => { 
    
        e.preventDefault();
        setLoad(true);
        if (code && language !== "Languages") { 
            const res = await GetTimeComplexity(code, language);
            setLoad(false);
            setResponse(res);

        }
    }
    return (
        <> {!len ? <LoginReq/> :

        
            <div>
                <div>
                    <h1>Tools</h1>
                    <p>
                        1. Choose the language your code is written in from the drop down below. <br></br><br></br>
                        2. Enter your code into the text box below. <br></br><br></br>
                        3. Click the "Analyze" button and see what time complexity your code runs in!
                    </p>
                    <DropDown language={language} setLanguage = {setLanguage}/>
                    <p>{(language === "Languages" && !code) ? "Please Select a Language & Input Code" : 
                        (!code) ? "Please Input Code" : (language === "Languages") ? "Please Select a Language" : ""}</p>
                    <textarea 
                        rows='60' 
                        cols ='80' 
                        className='input_code' 
                        placeholder='Enter code here!'
                        required
                        onChange={(e) => {setcode(e.target.value)}}
                        value={code}
                        
                    ></textarea>

                </div>
                <button onClick={handleSubmit}>Analyze Code</button>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    {load && <LoadingDots/>}
                    <p>{response ? response : ""}</p>
                </div>
                <br></br>
                <h5>To see how this analysis is done click here!</h5>
                
            </div>
            }
        </>
    )
}

export default Tools
