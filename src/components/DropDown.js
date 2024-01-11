import React from 'react'
import { useState, useEffect} from 'react'
import Menu from './Menu';
const DropDown = ({language, setLanguage}) => {
    const [open, setOpen] = useState(false);
    useEffect(() => { 
    },[])
    const update = () => {
        setOpen(!open);
    }

    return (
        <div className='menu-container'>
            <button className='dropbtn' onClick={update}>{language}</button>
            <br></br>
            <br></br>
            {open && <Menu setLanguage = {setLanguage} setOpen = {setOpen}/>}
        
        </div>
    )
}

export default DropDown
