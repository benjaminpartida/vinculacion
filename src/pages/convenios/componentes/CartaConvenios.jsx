const CartaConvenios = ({
    url,
    nombre,
    urlCategoria,
}) => {
    return (
        <div className="group rounded-lg m-8 relative shadow-lg border-red-600 h-48 w-48 flex justify-center overflow-hidden">
            <div className="self-end h-0 transition-all ease-out duration-500 group-hover:h-full flex items-center justify-center w-full absolute z-10">
                <p className="h-0 overflow-hidden group-hover:h-auto font-semibold text-xl z-20 opacity-100 text-white px-4 text-center">{nombre}</p>
                <div className="w-full h-full opacity-75 bg-black absolute"></div>
            </div>
            <img className="self-center max-w-full max-h-full p-4" alt="_blank" src={require(`../../../assets/images/convenios/${urlCategoria}/${url}`)}></img>
            
        </div>
    )
}

export default CartaConvenios;