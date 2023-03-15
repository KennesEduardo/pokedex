import React from 'react'

export default function PrevPage({pageClick}) {
    let numPage = 0

    function menosUm(){
        numPage --
        return numPage;
    }
  return (
    <div className='btn'>
        <button onClick={()=>pageClick(menosUm)}> Anterior
            
        </button>
    </div>
  )
}
