import React from 'react'

import { MdDownload } from "react-icons/md";

function TablaPatentes({ sectorData }) {
  return (
    <div className="flex flex-col p-4 md:p-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <div className=' h-[75vh] overflow-y-scroll'>
                    <table className="min-w-full text-left text-sm">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="md:px-6 px-4 py-4 sm:text-sm text-xs">NOMBRE DE LA PATENTE</th>
                                <th scope="col" className="md:px-6 px-4 py-4 sm:text-sm text-xs">DESCRIPCIÓN</th>
                                <th scope="col" className="md:px-6 px-4 py-4 sm:text-sm text-xs sm:block hidden">USOS</th>
                                <th scope="col" className="md:px-6 px-4 py-4 sm:text-sm text-xs">PATENTES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //Se crea una fila por cada patente del sector activo
                                sectorData.patentes.map((patente) => {
                                    return (
                                        <tr key={patente.titulo} className="border-b transition duration-400 ease-in-out dark:border-neutral-500 dark:hover:bg-neutral-200">
                                            <td className="md:px-6 px-4 py-4 font-medium sm:text-sm text-xs">{patente.titulo}</td>
                                            <td className="md:px-6 px-4 py-4 sm:text-sm text-xs">{patente.descripcion}</td>
                                            <td className="md:px-6 px-4 py-4 sm:text-sm text-xs sm:block hidden">{patente.usos}</td>
                                            <td className="md:px-6 px-4 py-4 sm:text-sm text-xs">
                                                {
                                                    //Si no existe el pdf de dicho patente, el icono de descarga no se agrega a la tabla
                                                    patente.pdf &&
                                                    <a target='_blank' rel="noreferrer" href={require(`../../../assets/pdf/patentes/${patente.pdf}`)}>
                                                        <MdDownload size={50}/>
                                                    </a>
                                                }
                                                
                                            </td>
                                        </tr>
                                    )
                                })
                            }   
                        </tbody>
                    </table>
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TablaPatentes
