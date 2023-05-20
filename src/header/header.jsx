import React from 'react';
import Projects from '../projects/projects';
import Solutions from '../solutions/solutions';
import Aboutus from '../aboutus/aboutus';
import ContactUs from '../contactus/contactus';
import Footer from '../footer/footer';


const Header = () => {
    return (<>
        <section className='my-2  md:h-[500px]'>
            <div className='w-full  mt-3 min-h-full flex md:justify-between items-center flex-wrap bg-white'>
                <div className='header-text md:w-1/2 mt-10 px-6 py-16 text-center'>
                    <h1 className='font-bold  text-3xl text-black'>Company Name </h1>
                    <p className='py-5 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quis perspiciatis.</p>
                    <button className='btn'>Learn More</button>
                </div>

                <div className='header-image md:w-1/2 px-1 md:px-1 relative'>
                    <img className='main bg-cover bg-no-repeat min-h-full' src={require('./header.jpg')} alt="header" />
                    <img className='md:h-48 h-32 z-10 absolute inset-x-20 bottom-0' src={require('./v-min.png')} alt="header" />
                </div>

            </div>
        </section>
        <Solutions/>
        <Projects />
        <Aboutus/>
        <ContactUs/>
        <Footer/>
    </>);
}

export default Header; 