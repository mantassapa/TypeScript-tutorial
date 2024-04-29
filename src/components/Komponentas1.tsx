import React, { useRef, useState } from 'react'
import { Counter } from '../interfaces/interface'
import Vaikiniselobjektas from './tasks/Vaikiniselobjektas'
import { User } from '../interfaces/interface'

const Komponentas1 = ({count, setCount, user}:Counter) => {    

    const inputRef = useRef<HTMLInputElement>(null)
    const [numb, setNumb] = useState<number>(0)

    const [squere, setSquere] =useState<Array<[number | string][]>>([])

    const handleSubmit =(e: React.FormEvent)=>{
        e.preventDefault()
    }

    const handleClick = (id: number)=>{
        console.log(id);
    }

 
    let vartotojas: User = {
        vardas:"jonas",
        pavarde:"Sablonas",
        amzius:25,
        pomegiai:[]
    }
    let usersArray: User[]

    usersArray=[
        {
            vardas:"stasius",
            pavarde:"Sablonas",
            amzius:25,
            pomegiai:["sd","yes.No"]
        },{
            vardas:"kastonas",
            pavarde:"kazyžka",
            amzius:25,
            pomegiai:["no"]
        },{
            vardas:"Petras",
            pavarde:"Sasas",
            amzius:25,
            pomegiai:["no"]
        },{
            vardas:"Alvydas",
            pavarde:"Sabnas",
            amzius:25,
            pomegiai:["yes", "yes"]
        }
    ]


  return (
    <div>
        {/* <Vaikiniselobjektas usersArray={usersArray}/> */}

    </div>
  )
}

export default Komponentas1