import React, {useEffect, useState} from 'react'
import axios from 'axios'

const PokeApi = () => {
    const [number, setNumber] = useState(1);
    const [name, setName] = useState()
    const [moves, setmoves] = useState()

    useEffect(()=>{
        const hell= async ()=>{
            const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
            // console.log("data  ", response.data.moves.length)
            setName(response.data.name);
            setmoves(response.data.moves.length)
        }
        hell();
    },[number])

  return (
    <>
    <div className="container text-center">
     <h1 className="text-center">You Choose Value <span className="text-danger">{number}</span></h1>
     <h1 className="text-center">Name:- <span className="text-danger">{name}</span></h1>
     <h1 className="text-center">Total Moves:- <span className="text-danger">{moves}</span></h1>
     

    <select className="custom-select custom-select-lg mb-3" value={number} onChange={(event)=>{
        setNumber(event.target.value)
    }}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </div>
    </>
  )
}

export default PokeApi
