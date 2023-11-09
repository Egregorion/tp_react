import {useState} from 'react'

export function Groupe({groupe}){

    const [grp, setGrp] = useState() 

    fetch('http://localhost:8000'+groupe)
    .then((res)=>res.json())
    .then(data => setGrp(data.name))
    
    return <span>{grp}</span>
}