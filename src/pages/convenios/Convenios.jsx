import Header from "../../components/Header";
import CartaConvenios from "./componentes/CartaConvenios"

import convenios from "../../assets/json/convenios.json"
import HeaderImage from "../../assets/images/convenios/convenio-header.jpg"

const Convenios = () => {
    return (
        <div className="mb-8">
            <Header title="Convenios" image={HeaderImage} />
            {/* <div>
                <p className='px-20 pt-12 m-auto text-2xl xl:text-3xl text-center md:w-4/5 lg:w-3/5 text-neutral-500'>Tipos de Convenios</p>
                <p className='m-auto px-20 pt-12 text-base lg:text-lg xl:text-xl md:w-4/5 lg:w-3/5 text-neutral-500'>Uno de los objetivos de la Secretaría de Vinculación se centra en el fortalecimiento de la vinculación entre el Instituto de Investigaciones en Materiales y los Sectores Empresarial y Gubernamental; así como con otras Entidades Académicas y Centros de Investigación.</p>
                <p className='m-auto px-20 pt-8 text-base lg:text-lg xl:text-xl md:w-4/5 lg:w-3/5 text-neutral-500'>Uno de los objetivos de la Secretaría de Vinculación se centra en el fortalecimiento de la vinculación entre el Instituto de Investigaciones en Materiales y los Sectores Empresarial y Gubernamental; así como con otras Entidades Académicas y Centros de Investigación.</p>
            </div> */}
            {convenios.map(({ categoria, convenios, urlCategoria }) => {
                return (
                    <div className="flex flex-col items-center">
                        <h2 className="border-t-2 border-slate-300 lg:w-4/6 w-11/12 sm:w-5/6 text-xl md:text-2xl xl:text-3xl py-8 mt-8 mx-16 text-center font-semibold font-serif font[var(--primary-color)]">{categoria}</h2>
                        <div key={categoria} className="w-full flex flex-row items-center justify-center flex-wrap">    
                            {convenios.map(({ nombre, url }) => {
                                return (
                                    <CartaConvenios key={nombre} nombre={nombre} url={url} urlCategoria={urlCategoria} />
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
        
        
        
    )
}

export default Convenios;