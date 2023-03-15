import React, { useEffect, useState } from 'react'
import SearchTypes from '../comps/SearchTypes'
import TypesItem from '../comps/TypesItem'

export default function Types() {
    const [nameTypes, setNameTypes] = useState(null)
    const [selectNameTypes, setSelectNameTypes] = useState("normal")

    useEffect(() =>{
        const url = `http://localhost:3333/types` 
        fetch(url)
            .then(dados => dados.json())
            .then(dados => setNameTypes(dados))
            .catch(err => console.log(err))
    }, []) 
    
    if( nameTypes == null){
        return(
            <div className=''>
                Carregando Dados...
            </div>
        )
    }
    function click(vClick){
        setSelectNameTypes(vClick)
    }

  return (
    <div className=''>
        <div className='head '>
            
        </div>
        <div className='h-20 text-xl  text-slate-200 bg-[#374E78] uppercase '> 
            <div className='flex '> 
                {nameTypes.map((anwerTypes) => (
                <TypesItem anwerT = {anwerTypes} key={anwerTypes.nome} quandoClicar={click} />
                ))}
            </div>

        </div>
        <div>
            <div className=''>
                <SearchTypes anwerNameTypes = {selectNameTypes} />
            </div>
         </div>
    </div>
      

  )
}
