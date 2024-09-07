import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

function Header({ title, image }) {
  const handleClick = () => window.scrollTo({top: window.innerHeight, left: 0});

  return (
    <div className='pb-8'>
      <div className='h-[500px] w-full relative drop-shadow-2xl'>
        <div className='flex flex-col items-center justify-center w-full h-full bg-black z-10 absolute opacity-75'></div>
        <div className='h-full w-full bg-transparent absolute z-10 flex flex-col items-center justify-center'>
        <h1 className='z-10 text-white opacity-100 sm:text-6xl lg:text-7xl text-5xl font-serif after:content-[""] after:block after:h-1 after:w-0 after:bg-white after:transition-width after:duration-700 after:ease-in-out hover:after:w-full'>{title}</h1>
        <div className='w-full flex justify-center absolute bottom-10'>
          <button onClick={handleClick} className='bg-[var(--primary-color)] w-16 h-16 z-50 rounded-full shadow-xl flex items-center	justify-center hover:bg-[#F8F8FF] transition group duration-300'>    
              <FaAngleDown size={36} className='group-hover:text-[var(--primary-color)] text-[#F8F8FF] transition duration-300' />
          </button>
        </div>
        </div>
        <img alt="Imagen del titulo" className='w-full h-full object-cover z-0' src={image} />
      </div>
    </div>
  )
}

export default Header;

