import React from 'react'
import { ReactComponent as LogoInstitutoBlanco } from "../assets/icons/instituto-logo-blanco.svg";

function Contactos() {
  return (
    <section className='w-full items-center bg-[var(--secondary-color)] flex p-3 pb-0 sm:flex-row flex-col '>
      <div className='sm:w-1/2 w-3/4 flex flex-col items-center sm:border-r-2 border-[#d7d6d6] sm:p-3'>
        <LogoInstitutoBlanco className='h-14 sm:h-16 lg:h-18  justify-center mb-4' />
        <div className='flex flex-col items-center text-[#F8F8FF] justify-evenly h-36 sm:h-48 border-t-2 border-[#F8F8FF] w-full lg:pt-4 sm:mx-8 md:w-8/12 lg:w-6/12 '>
            <p className=' opacity-65 cursor-default text-sm sm:text-base font-normal text-center'>Circuito Exterior S/N Circuito de la, Investigación Científica</p>
            <p className=' opacity-65 cursor-default text-sm sm:text-base font-normal text-center'>Ciudad Universitaria, 04510, CDMX</p>
        </div>
      </div>
      <div className='sm:w-1/2 w-3/4 flex flex-col items-center sm:p-3'>
        <h3 className='text-3xl h-14 sm:h-16 lg:h-20 flex items-center justify-center text-[#F8F8FF] mb-3 font-serif font-medium'>Contacto</h3>
        <div className='flex flex-col items-center text-[#F8F8FF] justify-evenly h-36 sm:h-48 border-t-2 border-[#F8F8FF] w-full lg:pt-4 sm:mx-8 md:w-8/12 lg:w-6/12 '>
            <p className=' opacity-65 cursor-default text-sm sm:text-base font-normal text-center'>Dra. Rocío G. de la Torre Sánchez <br />
            Secretaria de Vinculación
            </p>
            <p className=' opacity-65 cursor-default text-sm sm:text-base font-normal text-center'>Tel. (55) 56 22 45 81</p>
            <p className=' opacity-65 cursor-default text-sm sm:text-base font-normal text-center'> vinculacion@materiales.unam.mx</p>
        </div>
        </div>
    </section>
  )
}

export default Contactos
