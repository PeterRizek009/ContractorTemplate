import React from 'react';
import bgImage from './bg2.png'



const Aboutus = () => {





    const timelineData = [
        {
            'title': 'Lorem ipsum',
            'Date': '10/10/2019',
            'direction': 'left',
            'details': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
        {
            'title': 'Lorem ipsum',
            'Date': '10/10/2019',
            'direction': 'right',
            'details': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
        {
            'title': 'Lorem ipsum',
            'Date': '10/10/2019',
            'direction': 'right',
            'details': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
        {
            'title': 'Lorem ipsum',
            'Date': '10/10/2019',
            'direction': 'left',
            'details': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        },
        {
            'title': 'Lorem ipsum',
            'Date': '10/10/2019',
            'direction': 'right',
            'details': ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, deserunt?'
        }
    ]





    return (
        <section className='min-w-[100%] min-h-[800px] my-4 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bgImage})` }}>
            <h1 className='text-3xl leading-6 text-black text-center py-10 uppercase'>About us</h1>

            {timelineData.map((item) => (
                <div className="flex flex-col  md:grid grid-cols-9 mx-auto p-2 text-white">
                    {item.direction === 'right' ?
                        <div className="flex md:contents">
                            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-black pointer-events-none" />
                                </div>
                                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-400 shadow" />
                            </div>
                            <div className="bg-orange-400 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                <h3 className="font-semibold text-md mb-1">{item.Date}</h3>
                                <p className="leading-tight text-justify">
                                    {item.details}
                                </p>
                            </div>
                        </div>
                        :
                        <div className="flex flex-row-reverse md:contents">
                            <div className="bg-orange-400 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
                                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                <h3 className="font-semibold text-md mb-1">{item.Date}</h3>
                                <p className="leading-tight text-justify">
                                    {item.details}
                                </p>
                            </div>
                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-black pointer-events-none"></div>
                                </div>
                                <div
                                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-orange-500 shadow"
                                ></div>
                            </div>
                        </div>
                    }
                </div>
            )
            )}



        </section>
    );
}

export default Aboutus;