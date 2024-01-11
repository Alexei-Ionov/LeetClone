
import React from 'react'
import { useContext, useState, useEffect, useRef} from 'react'
import AuthContext from '../context/AuthProvider'
import DropDown from '../components/DropDown'
import CodeEditor from './CodeEditor';



const UserInputTools = () => {
    const {auth, setAuth} = useContext(AuthContext)
    const [code, setCode] = useState(auth.prevCode);
    const [language, setLanguage] = useState(auth.prevLanguage ? auth.prevLanguage : "Languages");
    const save = () =>  {
        let new_auth = auth;
        new_auth["prevCode"] = code;
        new_auth["prevLanguage"] = language;
        setAuth(new_auth);
        window.localStorage.setItem('LEETCLONE_AUTH', JSON.stringify(new_auth));
    }
    return (
         <div className='userInputToolsContainer'>
    
            <p>
                1. Choose the language your code is written in from the drop down below. <br></br><br></br>
                2. Enter your code into the text box below. <br></br><br></br>
            
            </p>
            <DropDown language={language} setLanguage = {setLanguage}/>
            <p>{(language === "Languages" && !code) ? "Please Select a Language & Input Code" : 
                (!code) ? "Please Input Code" : (language === "Languages") ? "Please Select a Language" : ""}</p>
            <CodeEditor language={language} setCode={setCode} code ={code}/>
            <br></br>
            <button onClick={() => save()}>Save Code</button>

           
        </div>
  )
}

export default UserInputTools
