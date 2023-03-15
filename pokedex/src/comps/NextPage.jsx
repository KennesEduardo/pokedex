import React from 'react'

export default function NextPage({pageClick}) {
    let numPage = 0

    function maisUm(){
        numPage ++
        return numPage;
    }
  return (
    <div className='btn'>
        <button onClick={()=>pageClick(maisUm)}> Próximo
            
        </button>
    </div>
  )
}
