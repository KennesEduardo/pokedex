import React, { useEffect, useState } from 'react'
import NextPage from './NextPage'
import PrevPage from './PrevPage'
import { Link } from 'react-router-dom'

export default function SearchRegion({anwerName}) {
    
    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(0)

    if(!anwerName)
        anwerName= "Kanto"

    useEffect(()=>{
        RegionPokemon()
    },[anwerName, page])

    function RegionPokemon(){
        const url = `http://localhost:3333/regions/${anwerName}/20/${page}` 
        fetch(url)
            .then(dados => dados.json())
            .then(dados => setPokemon(dados))
            .catch(err => console.log(err))
    }
    function nextPage(){
        setPage(page+1)
    }
    function prevPage(){
        if(page > 0 ){
            setPage(page-1)
        }
        else{
            setPage(0)
        }
    }

  return (
    <div>
        <div className=''>
            <div className='grid grid-cols-4 bg-gradient-to-b from-[#374E78] to-blue-500  '>
                {pokemon.map((poke) => (
                    <div className='rounded-lg border-[#758bb6] border-2  mx-2 my-2  '> 
                        <h2 className='capitalize text-center text-slate-300 hover:text-slate-400'>Nome: {poke.nome}</h2>
                        <h2 className='text-center text-slate-300 hover:text-slate-400'>#{poke.id}</h2>
                        <Link to={`/info/${poke.nome}`}> 
                            <img src={poke.img} alt="" /> 
                        </Link>
                        
                    </div>
                    
                ))}
 
            </div>
              
        </div>
        <div className=' bg-blue-500 ' >
            <div className='flex '>
                <PrevPage pageClick = {prevPage}/>
                <NextPage pageClick = {nextPage}/> 
            </div>

            
        </div>
    </div>
  )
}
