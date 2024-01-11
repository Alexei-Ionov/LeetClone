import React from 'react'
import MenuItem from './MenuItem'
const Menu = ({setLanguage, setOpen}) => {
  return (
    <div className='menu'>
        <ul className='list'>
            <MenuItem language={"Python3"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"JavaScript"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"C++"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"C#"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"C"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"Ruby"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"Go"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"Swift"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"PHP"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"Rust"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"MATLAB"} setLanguage = {setLanguage} setOpen = {setOpen}/>
            <MenuItem language={"TypeScript"} setLanguage = {setLanguage} />
        </ul>
    
    </div>
  )
}

export default Menu
