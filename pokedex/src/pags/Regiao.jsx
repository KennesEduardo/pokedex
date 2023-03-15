import React, { useEffect, useState } from 'react'
import RegionItem from '../comps/RegionItem'
import SearchRegion from '../comps/SearchRegion'

export default function Regiao() {
    const [nameRegion, setNameRegion] = useState(null)
    const [selectName, setSelectName] = useState("Kanto")

    useEffect(() =>{
        const url = `http://localhost:3333/regions` 
        fetch(url)
            .then(dados => dados.json())
            .then(dados => setNameRegion(dados))
            .catch(err => console.log(err))
    }, []) 
    
    if( nameRegion == null){
        return(
            <div className=''>
                Carregando Dados...
            </div>
        )
    }
    function click(vClick){
        setSelectName(vClick)
    }

  return (
    <div>
        <div className='head '>
            
        </div>
        <div className='flex h-20 text-xl  text-slate-200 bg-[#374E78] uppercase '>
            {nameRegion.map((anwerRegion) => (
                <RegionItem anwerR = {anwerRegion} key={anwerRegion.nome} quandoClicar={click} />
            ))}
        </div>
        <div className=''>
            <SearchRegion anwerName = {selectName} />
        </div>
    </div>
  )
}
