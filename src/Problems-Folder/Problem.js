import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faSpinner} from '@fortawesome/free-solid-svg-icons'

const check = <FontAwesomeIcon icon={faCheck} />
const progress = <FontAwesomeIcon icon={faSpinner} />


const Problem = ({path, name, difficulty, completion}) => {
    const completions = {
        0: '-',
        1: progress,
        2: check
    }

    return (
        <div className='list'>
            {completions[completion]}
            <Link to={path} name={name}>{name}</Link>
            <label>{difficulty}</label>
        </div>
    )
}

export default Problem
