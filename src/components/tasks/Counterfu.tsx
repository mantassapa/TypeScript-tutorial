import React from 'react'
import { NumberCount } from '../../interfaces/interface'

const Counterfu = ({setNumber}:NumberCount) => {


  return (
    <div>
        <button onClick={()=>setNumber((prev)=>prev+1)}>+1</button>
        <button onClick={()=>setNumber((prev)=>prev-3)}>-3</button>
    
    </div>
  )
}

export default Counterfu