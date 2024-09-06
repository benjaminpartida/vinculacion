import React, { useState } from 'react';
import TablaPatentes from "./componentes/TablaPatentes";
import MenuSectores from "./componentes/MenuSectores";
import Header from '../../components/Header';

import sectoresPatentes from '../../assets/json/sectoresPatentes.json'

const Patentes = () => {
  const [sectorActivo, setSectorActivo] = useState('alimentos');

  return (
    <div>
      {/* TODO: Falta cambiar la imagen del header */}
      {/* TODO: Importar las imagenes del header para guardarlas localmente y no importarlas por medio de un url */}
      <Header title="Patentes" image="https://www.derechosautor.com/index_archivos/images/patente.jpg" />
      <div className='w-full lg:w-[80%] m-auto'>
        <div className='flex flex-col'>
          <div className='flex md:flex-row flex-col border-b-2 border-slate-200'>
            <p className='px-20 md:py-8 pt-8 m-auto text-3xl text-center md:w-1/2 text-[var(--primary-color)] font-serif'>¿Qué es una patente?</p>
            <p className='m-auto px-20 py-8 text-base md:w-1/2 text-neutral-600 font-comic'>Una patente es un derecho que otorga una institución gubernamental para la protección de una invención, en México esta Institución es el Instituto Mexicano de la Propiedad Intelectual (IMPI). La protección se otorga por un periodo de 20 años improrrogables.</p>
          </div>
          <div className='flex md:flex-row flex-col'>
            <p className='px-20 md:py-8 pt-8 m-auto text-3xl text-center md:w-1/2 text-[var(--primary-color)] font-serif'>Beneficios que brindan las patentes</p>
            <p className='px-20 py-8 m-auto text-base md:w-1/2 text-neutral-600 font-comic'>Si se explota la invención por cuenta propia se adquiere una posición sólida en el mercado al impedir que terceros comercialicen la invención, por consiguiente se reduce la competencia. Por otro lado, se puede acceder o vender la invención bajo licencia, es decir, ceder los derechos a terceros para que la utilicen, obteniendo remuneración económica.</p>
          </div>
        </div>
        <MenuSectores sectoresPatentes={sectoresPatentes} setSectorActivo={setSectorActivo} sectorActivo={sectorActivo} />
        <div>
          <h2 className='text-2xl lg:text-3xl xl:text-4xl pt-16 pb-8 text-center font-bold text-[var(--primary-color)]'>{sectoresPatentes[sectorActivo].nombre}</h2>
          <TablaPatentes sectorData={sectoresPatentes[sectorActivo]} />
        </div>
      </div>
    </div>
  );
};

export default Patentes;
