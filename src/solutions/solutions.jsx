import React, { useEffect, useState } from 'react';
import { MdPlumbing } from 'react-icons/md'
import { TbPaintFilled } from 'react-icons/tb'
import Background from './bg.png'
import { BsDashLg } from 'react-icons/bs'


const Solutions = () => {

    const [index, setIndex] = useState(0)

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
            console.log(width);
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, [window.innerWidth]);

    const solutionsData = [
        {
            'soluLogo': <TbPaintFilled size={25} />,
            'soluName': 'Painting Works',
            'soluDetails': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
        {
            'soluLogo': <MdPlumbing size={25} />,
            'soluName': 'Painting Works',
            'soluDetails': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
        {
            'soluLogo': <MdPlumbing size={25} />,
            'soluName': 'Painting Works',
            'soluDetails': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
        {
            'soluLogo': <MdPlumbing size={25} />,
            'soluName': 'Painting Works',
            'soluDetails': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
    ]

    const handleOnDragStart = () => {

        index === solutionsData.length - 1 ? setIndex(0) : setIndex(index + 1)
    }


    const DotStyle = {
        color: 'orange',
        scale: '1.2'
    };


    return (
        <section className='solutions relative min-w-[100%] min-h-[600px] my-4 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Background})` }} >
            <h1 className='text-3xl leading-6 text-white text-center py-10 uppercase'>Our Solutions</h1>

            {width > 800 ?
                <div className='cards w-[100%] p-12  flex justify-between items-center flex-wrap'>
                    {solutionsData.map((solution, index) => (
                        <div className='card md:w-[30%] lg:w-[22%]  bg-white my-8 mx-2 py-14 flex flex-row flex-wrap justify-center items-end shadow-md'>
                            <div key={index} className='bg-orange-400  rounded-full p-4 md:p-6 text-black'>{solution.soluLogo}</div>
                            <h4 className='text-xl uppercase text-black p-6'>{solution.soluName}</h4>
                            <p className='text-md p-4'>{solution.soluDetails}</p>
                        </div>
                    )
                    )
                    }
                </div>
                :
                <div className='relative flex justify-center' >
                    <div className='card w-[50%]  bg-white my-16 mx-auto py-14  shadow-md cursor-grabbing duration-500' draggable="true"
                        onDragStart={handleOnDragStart}>
                        <div className='bg-orange-400 rounded-full p-3 w-[15%] mx-auto text-black'>{solutionsData[index].soluLogo}</div>
                        <h4 className='text-xl uppercase text-black p-6'>{solutionsData[index].soluName}</h4>
                        <p className='text-md p-4'>{solutionsData[index].soluDetails}</p>
                    </div>

                    <div className='absolute top-[88%] right-[40%] flex py-1'>
                        {solutionsData.map((slide, slideIndex) => (
                            <div key={slideIndex} className='text-4xl cursor-grabbing'  >
                                {slideIndex === index ?
                                    <BsDashLg style={DotStyle} />
                                    :
                                    <BsDashLg style={{ color: 'black' }} />
                                }
                            </div>
                        )
                        )}
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