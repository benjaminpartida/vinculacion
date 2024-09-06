import React, { useCallback } from 'react'

import { FaExternalLinkAlt } from "react-icons/fa";

function MenuInvestigadores({ materiaActiva, setMateriaActiva, investigadores }) {

  const handleClick = useCallback((e) => {
    setMateriaActiva(e.target.value)
  }, [setMateriaActiva])

  //Convertr el objeto "investigadores" en un array para poder iterar por el usando el metodo map

  let investigadoresArray = []

  for(let key in investigadores) {
    investigadoresArray.push(investigadores[key])
  }

  return (
    <div className='py-4 sm:p-4 sm:py-0 flex flex-col items-center justify-center w-full sm:w-1/3 m-auto sm:m-2 border-y-2 sm:border-y-0 border-slate-300 lg:w-1/3'>
      {
        investigadoresArray.map((materia, index) => {
          return (
            <button key={index} onClick={handleClick} value={materia.id} className={`cursor-default	w-64 sm:w-full lg:w-64 xl:w-72 items-center rounded-2xl text-sm lg:text-base h-16 xl:h-20 m-4 text-center justify-self-center p-2 xl:p-4 font-medium transition duration-300 flex flex-row group ${materiaActiva === materia.id ? 'bg-[var(--primary-color)] text-white scale-105' : 'bg-[#E2E7E7] hover:bg-[var(--primary-color)] hover:text-white hover:scale-105'}`}>
              <p className={`w-5/6 sm:text-xs md:text-sm group-hover:opacity-100 pointer-events-none px-2 ${materiaActiva === materia.id ? 'opacity-100' : 'opacity-70'}`}>{materia.name}</p>
              <a target='_blank' rel="noreferrer" href={require(`../../../assets${materia.infographic}`)} className='h-8 xl:h-10 w-8 xl:w-10 cursor-pointer'>
                <FaExternalLinkAlt className={`h-full w-full transition duration-300 ${materiaActiva === materia.id ? 'text-white ' : 'text-[var(--primary-color)] group-hover:text-white'}`} />
              </a>
            </button>
          );
        }) 
      }
    </div>
  )
}

export default MenuInvestigadores
