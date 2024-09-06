import React, { useState, useEffect } from 'react';

function CartaInvestigador({ image, name, works, pages }) {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const verticalDesign = (
    <div className='bg-[#E2E7E7] w-full m-auto max-w-80 md:max-w-96 flex flex-col items-center justify-center rounded-2xl p-2 mb-16 shadow-md'>
        <p className='text-[#082B2F] font-medium text-base md:text-lg border-b-2 border-[#1F5156] m-2 text-center w-10/12'>{name}</p>
        <img alt='Imagen del investigador' src={require(`../../../assets${image}`)} className='w-1/2 m-4 lg'></img>
        <div className='pb-4 flex flex-wrap items-center justify-center border-b-2 border-[#bbc9ca] w-10/12'>
            {
                pages.map((page, index) => {
                    return (
                        <a key={index} rel='noreferrer' target='_blank' href={page.url}  className='w-24 md:w-28	bg-[#082B2F] text-white rounded-xl text-xs md:text-sm p-1 flex items-center justify-center m-1 '>{page.pageName}</a>
                    )
                })
            }
        </div>
        <ol className='mx-4 my-4 list-decimal'>
            {
                works.map((work, index) => {
                    return (
                        <li key={index} className='text-xs md:text-sm py-2'>{work}</li>
                    )
                })
            }
        </ol>
    </div>
    )

    const horizontalDesign = (
        <div className='w-full xl:w-10/12 bg-[#E2E7E7] flex p-1 mb-16 rounded-xl group shadow-md'>
            <div className='rounded w-1/3 md:w-1/3 m-4 lg:m-8 overflow-hidden flex items-center justify-center'>
                <img alt='Imagen del investigador' src={require(`../../../assets${image}`)} className='object-cover group-hover:scale-125 transition duration-500 ease-in-out' ></img>
            </div>
            <div className='w-2/3 border-l-2 border-[#bbc9ca] p-2'>
                <p className='text-[#082B2F] font-medium text-base lg:text-xl xl:text-2xl after:content-[""] after:block after:h-1 after:w-0 after:bg-[#1F5156] after:transition-width after:duration-700 after:ease-in-out group-hover:after:w-full m-2 mb-4 text-center'>{name}</p>
                <div className='p-1 flex flex-wrap items-center justify-center'>
                {
                    pages.map((page, index) => {
                        return (
                            <a key={index} rel='noreferrer' target='_blank' href={page.url} className='lg:w-32 xl:w-40 bg-[#082B2F] text-white rounded-xl text-xs lg:text-sm xl:text-base p-1 flex items-center justify-center m-1 '>{page.pageName}</a>
                        )
                    })
                }
                </div>
                <ol className='mx-4 my-4 list-decimal'>
                    {
                        works.map((work, index) => {
                            return (
                                <li key={index} className='text-sm py-1'>{work}</li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )

    if(width < 1024){
        return verticalDesign
    } else {
        return horizontalDesign

    }
}

export default CartaInvestigador
