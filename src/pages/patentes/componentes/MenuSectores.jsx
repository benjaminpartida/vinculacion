import React from 'react'


function MenuSectores({ sectoresPatentes, setSectorActivo, sectorActivo}) {

    //Se cambia la valor de "sectorActivo" al valor del boton que se selecciona"
    const onClick = (e) => {
        setSectorActivo(e.target.value)
        const distance = window.innerHeight * 2.25;
        const duration = 1500;
        window.scrollTo(0, distance, duration);
    }

    //Se itera por el objeto sectoresPatentes para crear un boton de cada sector de patentes
    let sectorBotones= [];

    for (let key in sectoresPatentes) {
        let sector = sectoresPatentes[key];
        sectorBotones.push(<button key={sector.id} value={sector.id} onClick={onClick} className={`text-xs w-[80%] h-16 sm:h-12 m-4 text-center justify-self-center p-2 rounded-md font-medium transition duration-300  ${sectorActivo === sector.id ? 'bg-[var(--primary-color)] text-white scale-105' : 'bg-[#E2E7E7] hover:bg-[var(--primary-color)] hover:text-white hover:scale-105'}`}>{sector.nombre}</button>)
    }

    //Se agrgan todos los botones a un div
  return (
    <div className='w-full grid md:grid-cols-4 grid-cols-2 m-auto py-10'>
        {
            sectorBotones.map((item) => {
                return item;
            })    
        }
    </div>
  )
}

export default MenuSectores
