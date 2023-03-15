import React from 'react'

export default function TypesItem({anwerT, quandoClicar}) {
  
    return (
        <div className='mx-auto pt-5 cursor-pointer hover:text-gray-900 border-solid border-cyan-50' 
        onClick={()=> quandoClicar(anwerT.nome)}> 
            {anwerT.nome}
                  
        </div>

  )
}
