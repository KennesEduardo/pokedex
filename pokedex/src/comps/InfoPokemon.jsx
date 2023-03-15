import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import DadosPokemon from './DadosPokemon';

export default function InfoPokemon() {
    
    const{nomePoke} = useParams();
    const[infoPokemon, setInfoPokemon] = useState([])

    useEffect(()=> {
        const url =`http://localhost:3333/pokemon/${nomePoke}`
        fetch(url)
            .then(dados => dados.json())
            .then(dados => setInfoPokemon(dados))
            .catch(err => console.log(err))
    }, [])

    console.log(infoPokemon)
  return (
    <div>
        <div>
            {infoPokemon.map((dados) =>(
                <DadosPokemon dado={dados}
                key={dados.nome}/>
            ))}
        </div>
    </div>
  )
}
