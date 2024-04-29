import React, { useState } from 'react'
// import { UserInterface } from '../interfaces/interface';
import Komponentas1 from './Komponentas1';
import Vaikinisel from './tasks/Vaikinisel';

// const Demo:React.FC<{firstnam: string}> = ({firstnam}) => {
    // ||
// const Demo = ({ firstnam }: UserInterface) => {
    // ||
const Demo = ({firstnam}:{firstnam:string}) => {
    // typeScript tipai--------------------
    // console.log(firstnam);

const [count, setCount] = useState<number>(0)
    
  let myNumber: number;
  myNumber = 5;

  let myNumberArray: number[];
  myNumberArray = [5];

  let myString: string="hei";
  myString = "5";

  let myStringArray: Array<string>=["hey"];
  myStringArray = ["5"];

  let isOpen: boolean;
  isOpen = true;

  let myTuple: [number, string, boolean];
  myTuple = [5, "hello", true]

  let myObject: Object;

  type MyType = string | number | boolean

  type MyUser = {
      firstName: string;
      age: number;
      hobbies?: string[]
  }

  let user: MyUser={
      firstName:"jonas",
      age:33,
  }
  let usersArray:MyUser[];

  usersArray=[
    {
        firstName:"jonas",
        age:33,
    },{
        firstName:"jonas",
        age:33,
    },{
        firstName:"jonas",
        age:33,
    },{
        firstName:"jonas",
        age:33,
    }
  ]
    type Coworker=MyUser&{
        id:number;
        deaprtment: string;
    }
    let useris: Coworker={
    firstName:"jonas",
    age:33,
    id:2,
    deaprtment:"first"
    }

    interface User {
        firstName: string;
        age: number;
        hobbies?: string[]
    }
    let use: User = {
        firstName:"jonas",
        age:33,
    }
    interface MyCoworker extends User {
        id:number;
        deaprtment: string;
        myFunction?: (name: string) => void;
    }


    // let myFunction: Function;
    // let myFunction: (name: string) => void;
    function myFunction(name:string){
        console.log(name);
    }
    function myFunction2(name:unknown){
        if(typeof name==="string"){console.log(name);}
        
    }
    function myFunction3(user:User){
        {console.log(user)}
        
    }
    // myFunction("john")
    // myFunction2("john")
    // myFunction3(use)


    enum Weekdays{
        Monday=1, Tuesday, Wensday, Thirsday, Friday, Saturday, Sunday,
    }
    let today:Weekdays=Weekdays.Tuesday;
    // console.log(today);
    


  return (
    <div>
        <Komponentas1 count={count} setCount={setCount} user={[]}/>
        <Vaikinisel pasisveikinimas="Labas"/>
    </div>
  )
}

export default Demo