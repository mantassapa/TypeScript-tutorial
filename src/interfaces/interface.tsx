interface Usera{
    name:string;
    age:number;
}

export interface Counter{
    count:number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    user?:Usera[]
}
export interface User{
    vardas:string;
    pavarde:string;
    amzius:number;
    pomegiai:string[];
}
export interface Users{
    usersArray:User[]
}
export interface NumberCount{
    setNumber: React.Dispatch<React.SetStateAction<number>>;
}