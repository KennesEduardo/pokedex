import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react'
import { Link } from 'react-router-dom'
import NextPage from './NextPage'
import PrevPage from './PrevPage'


export default function SearchTypes({anwerNameTypes}) {
    
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [page, setPage] = useState(0)

    if(!anwerNameTypes)
        anwerNameTypes= "normal"

    useEffect(()=>{
        TypesPokemon()
    },[anwerNameTypes, page])

    function TypesPokemon(){
        const url = `http://localhost:3333/types/${anwerNameTypes}/20/${page}` 
        fetch(url)
            .then(dados => dados.json())
            .then(dados => setPokemonTypes(dados))
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
                {pokemonTypes.map((pokeTypes) => (
                    <div className='rounded-lg border-[#758bb6] border-2  mx-2 my-2  '> 
                        <h2 className='capitalize text-center text-slate-300 hover:text-slate-400'>Nome: {pokeTypes.nome}</h2>
                        <h2 className='text-center text-slate-300 hover:text-slate-400'>#{pokeTypes.id}</h2>

                        <div className='cursor-pointer'> 
                            <Link to={`/info/${pokeTypes.nome}`}> 
                                <img src={pokeTypes.img} alt="" /> 
                            </Link>
                            
                        </div>
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
