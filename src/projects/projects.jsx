import React from 'react';
import "./projects.css"
import projIM from "./project.jpg"



const Projects = () => {
  const projectData = [
    {
      'projectName': "project1",
      'projectImg': projIM,
      'projectDetails': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iusto, blanditiis cumque nulla vitae consequatur."

    },
    {
      'projectName': "project2",
      'projectImg': projIM,
      'projectDetails': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iusto, blanditiis cumque nulla vitae consequatur."

    },
    {
      'projectName': "project3",
      'projectImg': projIM,
      'projectDetails': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iusto, blanditiis cumque nulla vitae consequatur."

    }
  ];

  return (
    <>
      <section className="projects mb-24 bg-cover bg-no-repeat mt-2">
        <h1 className='text-3xl leading-6 text-white text-center py-8 uppercase'>Latest Projects</h1>
        {/* <Carousel className="rounded-xl">
          <div className='relative h-full w-full'>
            <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover" />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that
                  quality of air that emanation from old trees, that so
                  wonderfully changes and renews a weary spirit.
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Beauty of Nature
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  It is not so much for its beauty that the forest makes a claim
                  upon men&apos;s hearts, as for that subtle something, that
                  quality of air that emanation from old trees, that so
                  wonderfully changes and renews a weary spirit.
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text">
                    Gallery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel> */}

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