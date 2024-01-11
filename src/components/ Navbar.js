import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUser} />

const  Navbar = () => {
    const {auth} = useContext(AuthContext);
    const len = Object.keys(auth).length

    return (

        <nav className='nav'>
            <Link to='/'>Home</Link>
            <ul>
                <CustomHover to={"/problems"} name={"Problems"}/>
                <CustomHover to={"/progress"} name={"Progress"}/>
                <CustomHover to={'/tools'} name={"Tools"}/>
                <CustomHover to={!len ? "/signin" : "/profile"} name = {!len ? "Signin" : element}/>

            </ul>

        </nav>
       
      );
}
function CustomHover({to, name}) { 
    const resolvedPath = useResolvedPath(to);
    const Active = useMatch({path: resolvedPath.pathname, end:true})
    
    return (
        <li className= {Active ? "active" : ""} >
            <Link to={to}>{name}</Link>
        </li>
    );
}


export default  Navbar
