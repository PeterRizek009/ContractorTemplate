import React, { useState } from 'react';
import "./projects.css"
import projIM from "./project.jpg"
import project2 from "./Project2.jpg"
import project3 from "./project3.jpg"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'



const Projects = () => {


  const projectData = [
    {
      'projectName': "project1",
      'projectImg': project2,
      'projectDetails': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iusto, blanditiis cumque nulla vitae consequatur.",

    },
    {
      'projectName': "project2",
      'projectImg': projIM,
      'projectDetails': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iusto, blanditiis cumque nulla vitae consequatur.",

    },
    {
      'projectName': "project3",
      'projectImg': project3,
      'projectDetails': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iusto, blanditiis cumque nulla vitae consequatur.",

    }
  ];


  const [index, setIndex] = useState(0)


  const prevSlide = () => {
    index === 0 ? setIndex(projectData.length - 1)
      :
      setIndex(index - 1)
  }

  const nextSlide = () => {
    index === projectData.length - 1 ? setIndex(0)
      :
      setIndex(index + 1)
  }


  return (
    <>
      <section className="projects mb-24 bg-cover bg-no-repeat mt-4">
        <h1 className='text-3xl leading-6 text-white text-center py-8 uppercase'>Latest Projects</h1>
        <div className='md:max-w-[900px] max-w-[400px] h-[400px] md:h-[600px] w-full m-auto p-3  relative bg-black rounded-2xl shadow-lg'>
          <div style={{ backgroundImage: `url(${projectData[index].projectImg})` }} className='w-full h-full rounded-2xl   bg-cover bg-no-repeat duration-500'>
            {/* left arrow   */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl  rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactLeft size={30} onClick={prevSlide} />

            </div>
            {/* Right arrow   */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl  rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight size={30} onClick={nextSlide} />

            </div>
            <div className='flex alignpy-2 '>
              {projectData.map((index) => (
                  <div key={index} className='text-2xl cursor-pointer'>
                  <RxDotFilled size={30} style={{color : 'white'}}/>
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
      </section>
    </>);
}

export default Projects;