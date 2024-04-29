import React from 'react'
import { User, Users } from '../../interfaces/interface';

const Vaikiniselobjektas = ({usersArray}:Users) => {
    console.log(usersArray);
    
  return (
    <div>{usersArray.map((e)=>(
        <div key={e.vardas}>
            <p><span>Vardas: </span>{e.vardas}</p>
            <p><span>Pavarde: </span>{e.pavarde}</p>
            <p><span>Amzius: </span>{e.amzius}</p>
            {/* <p><span>Pomegia: </span>{e.pomegiai.map((el)=>(
                <li key={el+1}>{el}</li>
            ))}</p> */}
        
        </div>

    ))
        
        }</div>
  )
}

export default Vaikiniselobjektas