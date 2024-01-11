import React from 'react'
import UserInputTools from '../components/UserInputTools'
import { useContext, useState} from 'react'
import AuthContext from '../context/AuthProvider'
import LoginReq from './LoginReq'
import TimeAnalyzer from '../components/TimeAnalyzer'
import SpaceVisualizer from '../components/SpaceVisualizer'
const Tools = () => {
    const {auth} = useContext(AuthContext);
    const len = Object.keys(auth).length
    const [loadTime, setLoadTime] = useState(false);
    const [loadSpace, setLoadSpace] = useState(false);

    return (
        <>
            {!len ? <LoginReq/> : loadTime ? <TimeAnalyzer id={-1}/> : loadSpace ? <SpaceVisualizer id={-1}/> : 
            
            (

                <div className='toolsContainer'>
                    <h1>Tools</h1>
                    <UserInputTools/>
                    <div className='insideContainer'>
                        <h2>Time Complexity Analyzer</h2>
                        <p>
                            Want to see what your code runs in? 
                            <br/> 
                            Click here to get an analysis and breakdown of your code!
                        </p>
                        <button onClick={() => {setLoadTime(true)}}>CLICK 4 TIME</button>
                    </div>
                    <br></br>

                    <div className='insideContainer'>
                        <h2>Space Visualizer</h2>
                        <p>
                            Want to visualize your code?
                            <br/> 
                            Click here to visualize your code
                        </p>
                        <button onClick={() => {setLoadSpace(true)}}>CLICK 4 SPACE</button>
                    </div>


                </div>
                )
            }
        </>
    )
}

export default Tools
