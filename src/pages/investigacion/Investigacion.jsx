import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import MenuInvestigadores from "./componentes/MenuInvestigadores"
import Investigadores from "./componentes/Investigadores"
import CartaInvestigador from './componentes/CartaInvestigador';

import investigadoresPorMateria from '../../assets/json/investigadoresPorMateria.json'
import listaDeInvestigadores from "../../assets/json/listaDeInvestigadores.json"
import imagenHeader from '../../assets/images/investigadores/investigacion-header.jpg'

function Investigacion() {
  const [materiaActiva, setMateriaActiva] = useState('MateriaCondensadaCriogenia');
  const [nombreBusqueda, setNombreBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);

  const manejarBusqueda = () => {
    const investigadoresEncontrados = listaDeInvestigadores.filter((investigador) => {
      return investigador.name.toLowerCase().includes(nombreBusqueda.toLowerCase());
    });
    setResultados(investigadoresEncontrados);
  }

  useEffect(() => {
    manejarBusqueda();
  })

  //La siguiente funcion se encarga de definir que contenido se mostrara en pantalla
  const contenidoBusqueda = () => {
    //Si la barra de busqueda no esta vacia se hara lo siguiente:
    if (nombreBusqueda.length > 0) {
      //En caso de que se haya encontrado por lo menos un investigador, se mostraran las cartas de dichos investigadres
      if (resultados.length > 0) {
        return (
          <div className='py-12 sm:p-4 sm:w-2/3 lg:w-2/3 flex flex-col items-center sm:overflow-hidden sm:overflow-y-scroll m-4'>
            {resultados.sort((a, b) => a.name.localeCompare(b.name)).map(investigador => (
              <CartaInvestigador
                key={investigador.id}
                image={investigador.image}
                name={`${investigador.abbreviation} ${investigador.name}`}
                works={investigador.works}
                pages={investigador.pages}
              />
            ))}
          </div>
          
        )
      }
      //En caso de que se haya encontrado nada (si el array de resultados esta vacio), se mostrara lo siguiente en pantalla
      return (
        <p className='py-12 sm:p-4 sm:w-2/3 lg:w-2/3 text-center'>No se encontraron resultados</p>
      )
    }
    //Si la barra de busqueda esta vacia, se mostraran todos los investigadores existentes
    return (
      <div className='py-12 sm:p-4 sm:w-2/3 lg:w-2/3 flex flex-col items-center sm:overflow-hidden sm:overflow-y-scroll m-4'>
        {listaDeInvestigadores.sort((a, b) => a.name.localeCompare(b.name)).map(investigador => (
          <CartaInvestigador
            key={investigador.id}
            image={investigador.image}
            name={`${investigador.abbreviation} ${investigador.name}`}
            works={investigador.works}
            pages={investigador.pages}
          />
        ))}
      </div>
      
    )
  }

// Checar que "materiaActiva" siempre tenga una valida del objeto de investigadores, y en caso de que no exista, se le asignara la primera materia de dicho objeto 
//Esto nos asegura que "materiaActiva" no tenga un valor null o undefined
  useEffect(() => {
    if (!investigadoresPorMateria[materiaActiva]) {
      setMateriaActiva(Object.keys(investigadoresPorMateria)[0]); 
    }
  }, [materiaActiva]);

  return (
    <div>
      <Header
        title="Investigadores"
        image={imagenHeader}
      />
      <div>
        <div className="flex flex-col sm:flex-row my-8 sm:h-[540px]">
          <MenuInvestigadores
            materiaActiva={materiaActiva}
            setMateriaActiva={setMateriaActiva}
            investigadores={investigadoresPorMateria}
          />
          <div className="border-slate-300 sm:border-l-2 py-12 sm:p-4 sm:w-2/3 lg:w-2/3 flex flex-col items-center sm:overflow-hidden sm:overflow-y-scroll">
            <Investigadores materiaActiva={investigadoresPorMateria[materiaActiva]} />
          </div>
        </div>
      </div>
      {/* TODO: Mover la barra de busqueda a un componente separado */}
      <div>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl pt-16 pb-8 text-center font-semibold opacity-70">
          Buscar Investigador
        </h2>
        <div className="flex flex-col mb-8 sm:max-h-[540px] w-full items-center">
          <div className='m-8 relative flex items-center w-full max-w-96 md:max-w-[448px] h-12 rounded-lg'>
            <input 
              type="text" 
              className="w-full p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F5156] focus:border-transparent" 
              placeholder="Ingresa el nombre del investigador" 
              value={nombreBusqueda}
              onChange={(e) => {
                setNombreBusqueda(e.target.value)
              }}
            />
            <svg className="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
            {contenidoBusqueda()}
        </div>
      </div>
    </div>
  );
}

export default Investigacion;
