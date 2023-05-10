import React from 'react';
import "./projects.css"
import projIM from "./project.jpg"
import project2 from "./Project2.jpg"
import project3 from "./project3.jpg"
import {BsChevronCompactLeft , BsChevronCompactRight} from 'react-icons/bs'



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

  return (
    <>
      <section className="projects mb-24 bg-cover bg-no-repeat mt-4">
        <h1 className='text-3xl leading-6 text-white text-center py-8 uppercase'>Latest Projects</h1>
        <div className='max-w-[900px] h-[600px] w-full m-auto py-2 px-2 relative bg-black rounded-lg'>
          <div style={{ backgroundImage: `url(${projectData[0].projectImg})` }} className='w-full h-full rounded-2xl  bg-cover bg-no-repeat duration-500'>
            {/* left arrow   */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl  rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft size={30}  />

            </div>
            {/* Right arrow   */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl  rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight size={30}/>

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