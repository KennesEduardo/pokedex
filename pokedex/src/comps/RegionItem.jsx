import React from 'react'

export default function RegionItem({anwerR, quandoClicar}) {
  
    return (
    <div className=' m-auto pt-5 ' >
        <div onClick={()=> quandoClicar(anwerR.nome)}> 
            <div className='cursor-pointer hover:text-gray-900'> 
                {anwerR.nome}
            </div>
            
            
        </div>
    </div>
  )
}
