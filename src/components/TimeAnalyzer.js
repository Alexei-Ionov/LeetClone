import React from 'react'
import { useContext, useState, useEffect} from 'react'
import AuthContext from '../context/AuthProvider'

import LoadingDots from '../components/LoadingDots'
import GetTimeComplexity from '../Functions/GetTimeComplexity'

const TimeAnalyzer = ({id}) => {
    const {auth} = useContext(AuthContext);
    const code = (id < 0) ? auth.prevCode : auth.problems[id][1];
    const language = (id < 0) ? auth.prevLang : auth.problems[id][2];
    const [response, setResponse] = useState();
    const [load, setLoad] = useState(false)
   
    const handleSubmit = async (e) => { 

        if (code && language !== "Languages") { 
            setResponse("");
            setLoad(true);
            const res = await GetTimeComplexity(code, language);
            setLoad(false);
            setResponse(res);
        } else { 
           
        }
    }
    return (
         <div>
            <button onClick={handleSubmit}>Analyze</button>
            {load && <LoadingDots/>}
            <p>{response ? response : ""}</p>

            
        </div>
      
  )
}

export default TimeAnalyzer
