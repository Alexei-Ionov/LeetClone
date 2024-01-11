import React from 'react'

const Block = ({label}) => {
  return (
    <div>
        <h2>{label}</h2>
        <input className='input' placeholder='...'></input>
      
    </div>
  )
}

export default Block
