import React from 'react'

export default function DadosPokemon({ dado }) {

    function prevPag(){
        window.history.back()
    }

  return (
    <div className='telaInfo flex flex-row justify-center bg-gradient-to-b from-[#374E78] to-blue-500 text-justify
                    text-gray-900  text-3xl ' >
        <div className='mx-2 my-2 text-center' >

            <h1>{dado.nome}</h1>    
            <p>#{dado.numero}</p>
            <img src={dado.img} />
            <button onClick={prevPag} className='btn' > Voltar </button>
                



        </div>
        <div className='mx-2 my-48 '>
                <p>HP: {dado.hp}</p>
                <p>ATK: {dado.atk}</p>
                <p>DEF: {dado.def}</p>
                <p>SPATK: {dado.spatk}</p>
                <p>SPDEF: {dado.spdef}</p>
                <p>SPEED: {dado.speed}</p>
            </div>
        
    </div>
  )
}
