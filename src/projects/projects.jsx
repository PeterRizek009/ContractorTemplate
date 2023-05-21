import React, { useState } from 'react';
import './projects.css'
import projIM from "./project.jpg"
import project2 from "./Project2.jpg"
import project3 from "./project3.jpg"

import { RxDotFilled } from 'react-icons/rx'
import { MdPlumbing } from 'react-icons/md'
import { MdOutlineElectricalServices } from 'react-icons/md'
import { TbPaintFilled } from 'react-icons/tb'
import { Element } from 'react-scroll'

const Projects = () => {


  const projectData = [
    {
      'projectName': "project1",
      'projectIcon': <TbPaintFilled size={23} />,
      'projectImg': project2,
      'projectDetails': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iusto, blanditiis cumque nulla vitae consequatur.",

    },
    {
      'projectName': "project2",
      'projectIcon': <MdPlumbing size={23} />,
      'projectImg': projIM,
      'projectDetails': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iusto, blanditiis cumque nulla vitae consequatur.",

    },
    {
      'projectName': "project3",
      'projectIcon': <MdOutlineElectricalServices size={23} />,
      'projectImg': project3,
      'projectDetails': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iusto, blanditiis cumque nulla vitae consequatur.",

    }
  ];


  const [index, setIndex] = useState(0)


  const DotStyle = {
    color: 'orange',
    scale: '1.7'
  };



  const goToSlide = (slideIndex) => {
    setIndex(slideIndex)
  }


  const DragSlides = (slideIdx) => {
    slideIdx === projectData.length - 1 ? setIndex(0) : setIndex(slideIdx + 1)
  }

  return (
    <Element id='projects' name='projects'>
      <section className="projects pb-12 bg-cover bg-no-repeat my-4 border-white">
        <h1 className='text-3xl leading-6 text-white text-center py-8 uppercase'>Latest Projects</h1>
        <div className='md:max-w-[900px] max-w-[600px]  h-[700px] md:h-[600px]  mx-auto md:p-2  relative bg-gray-950 md:rounded-2xl  shadow-lg'>
          <div style={{ backgroundImage: `url(${projectData[index].projectImg})` }} className='relative w-full h-full md:rounded-2xl  bg-cover bg-no-repeat duration-500 cursor-grab'
            onTouchStart={() => DragSlides(index)}>
            <div className='absolute bottom-[5%]  flex flex-col items-start  px-8 text-white'>
              <div className='flex justify-between py-3'>
                <div className='bg-orange-500 rounded-full p-1 md:p-3'>
                  {projectData[index].projectIcon}
                </div>
                <h2 className='text-xl font-bold md:text-4xl uppercase mx-3'>{projectData[index].projectName}</h2>
              </div>
              <p className='md:w-1/2 text-lg md:text-2xl py-2 md:py-5'>{projectData[index].projectDetails}</p>
            </div>


            <div className='absolute top-[45%] rotate-90 right-0 flex py-2'>
              {projectData.map((slide, slideIndex) => (
                <div key={slideIndex} className='text-4xl cursor-pointer' >
                  {slideIndex === index ?
                    <RxDotFilled style={DotStyle} onClick={() => setIndex(slideIndex)} onDrag={() => setIndex(slideIndex)} />
                    :
                    <RxDotFilled style={{ color: 'white' }} onClick={() => goToSlide(slideIndex)} />
                  }
                </div>
              )
              )}

            </div>


          </div>


        </div>

        {/* <div className="flex justify-between flex-wrap">
          {projectData.map((project) => {
            return (
              <div className='project z-10 my-12 pb-5 mx-10 h-auto bg-white md:w-1/4' key={project.projectName}>
                <img src={project.projectImg} alt="project" />
                <h1 className='mx-5 my-3'>{project.projectName}</h1>
                <p className='mx-5 my-5'>{project.projectDetails}</p>
              </div>
            )
          })}
        </div> */}
      </section >
      </Element>
      );
}

      export default Projects;