import React, { useEffect, useState } from 'react';
import { MdPlumbing } from 'react-icons/md'
import { TbPaintFilled } from 'react-icons/tb'
import { MdOutlineElectricalServices } from 'react-icons/md'
import Background from './bg.png'
import { RxDotFilled } from 'react-icons/rx'

const Solutions = () => {

    const [index, setIndex] = useState(0)

    const [width, setWidth] = useState(0);


    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
           
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);


    const DotStyle = {
        color: 'orange',
        scale: '1.4'
    };


    const solutionsData = [
        {
            'soluLogo': <TbPaintFilled size={30} />,
            'soluName': 'Painting Works',
            'soluDetails': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
        {
            'soluLogo': <MdPlumbing size={30} />,
            'soluName': 'Painting Works',
            'soluDetails': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
        {
            'soluLogo': <MdOutlineElectricalServices size={30} />,
            'soluName': 'Painting Works',
            'soluDetails': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
        {
            'soluLogo': <MdPlumbing size={30} />,
            'soluName': 'Painting Works',
            'soluDetails': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
    ]

    const handleOnDragStart = () => {
        index === solutionsData.length - 1 ? setIndex(0) : setIndex(index + 1)
        
    }





    return (
        <section className='solutions relative min-w-[100%] min-h-[600px] my-4 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Background})` }} >
            <h1 className='text-3xl leading-6 text-white text-center py-10 uppercase'>Our Solutions</h1>

            {width > 760 ?
                <div className='cards w-[100%] p-12  flex justify-between items-center flex-wrap'>
                    {solutionsData.map((solution, index) => (
                        <div className='card md:w-[30%] lg:w-[22%]  bg-white my-8 mx-2 py-14 flex flex-row flex-wrap justify-center items-end shadow-md rounded-md'>
                            <div key={index} className='bg-orange-400  rounded-full p-4 md:p-6 text-black'>{solution.soluLogo}</div>
                            <h4 className='text-xl uppercase text-black p-6'>{solution.soluName}</h4>
                            <p className='text-md p-4'>{solution.soluDetails}</p>
                        </div>
                    )
                    )
                    }
                </div>
                :
                <div className='flex justify-center flex-row flex-wrap' >
                    <div className='card max-w-[60%]  bg-white my-16 mx-auto py-16  shadow-md cursor-grabbing duration-500 rounded-md' draggable="true"
                        onDragStart={handleOnDragStart} onTouchStart={handleOnDragStart}>
                        <div className='bg-orange-400 rounded-full p-4  w-[60px]  mx-auto text-black'>{solutionsData[index].soluLogo}</div>
                        <h4 className='text-xl uppercase text-black p-6 text-center'>{solutionsData[index].soluName}</h4>
                        <p className='text-xl p-4 mb-8'>{solutionsData[index].soluDetails}</p>
                  

                    <div className='flex justify-center items-end pt-1 mx-auto'>
                        {solutionsData.map((slide, slideIndex) => (
                            <div key={slideIndex} className='text-3xl cursor-grabbing'  >
                                {slideIndex === index ?
                                    <RxDotFilled style={DotStyle} />
                                    :
                                    <RxDotFilled style={{ color: 'black' }} />
                                }
                            </div>
                        )
                        )}
                          </div>
                    </div>
                </div>
            }

            {/* <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-xl  rounded-full p-1 bg-orange-400 shadow-md text-white cursor-pointer'>
                <BsChevronCompactLeft size={30}  onClick={prevSlide}/>
            </div>

            <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-xl  rounded-full p-1 bg-orange-400 shadow-md text-white cursor-pointer'>
                <BsChevronCompactRight size={30} onClick={nextSlide} />
            </div> */}
        </section>
    );
}

export default Solutions;