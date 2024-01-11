import React from 'react'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthProvider'
import Savework from '../Functions/Savework'
import CheckSolution from '../Functions/CheckSolution'
import problems from './problems_info'
import DropDown from '../components/DropDown'
import TimeAnalyzer from '../components/TimeAnalyzer'
import CodeEditor from '../components/CodeEditor'

const ProblemFramework = ({id}) => {
    const {auth, setAuth} = useContext(AuthContext);
    const problem = problems[id];
    const savedLang = auth["problems"][id][2]
    const [language, setLanguage] = useState(savedLang ? savedLang : "Languages");
    const savedCode = auth["problems"][id][1];
    const [code, setCode] = useState(savedCode);  
    const [loadTool, setTool] = useState(false);  
    const check = () => { 
        let res = CheckSolution(code, id);
        if (!res) {
            // show what test case if fails on
        } else if (res === 1) { 
            //error message for failure to reach optimal time complexity
        } else { 
            alert("CONGRATS!")
            setCode("");
            Savework(2, id, auth, setAuth, "", language);
        }
    }
    return (
        <> 
            {loadTool ? <TimeAnalyzer id={id}/> : (
                <div>
                    <div>
                        <p>{problem["description"]}</p>
                        <DropDown language={language} setLanguage = {setLanguage}/>
                        <br></br>
                        <CodeEditor language={language} setCode = {setCode} code = {code}/>
                    </div>
                    <br></br>
                    <button onClick={() => Savework(1, id, auth, setAuth, code, language)}>Save Attempt</button>
                    <br></br>
                    <br></br>
                    <button onClick={check}>Check Solution</button>
                    <br></br>
                    <br></br>
                    <p>Struggling to get the Optimal Solution? <br/> <br/> Click below to see the time complexity of your code!</p>
                    <button onClick={() => {
                        
                        setTool(true)

                    
                    }}
                        
                    >CLICK HERE</button>
                </div>
                )
            }
        </>
    )
}

export default ProblemFramework
