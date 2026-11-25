import { motion } from "framer-motion";
import { useEffect, useState } from "react"


type Project = {
    id: number;
    name: string;
    github: string;
    live: string;
    description: string;
    img: string;
};
function Projects(){
    const projects =[
        {
            id: 1,
            name: "portfolio",
            live: "https://portfolio-ruby-six-69.vercel.app/",
              img: "/projects/Portifolio.PNG",
             description: "A personal portfolio website showcasing my technical skills, projects, professional background, and experience as a Junior Full-Stack Developer and QA Tester."
        },
        {
            id: 2, 
            name: "Note-App",
            live:"https://notes-app-qznv.vercel.app/",
            img:"/projects/noteApp.PNG",
             description: "A note-taking application that allows users to create, organize, pin, and archive notes. It uses localStorage to keep notes saved in the browser."
                    },
        {
            id:3,
            name: "Weather-Dashboard",
            live: "https://weather-dashboard-eight-plum.vercel.app/",
            img:"/projects/weatherDashboard.PNG",
            description: "A responsive weather dashboard designed to help users check weather information through a clean and user-friendly interface."

        },
        {
            id:4,
            name: "To-do-list-app",
            live:"https://to-do-list-app-web.vercel.app/",
            img:"/projects/toDoListApp.PNG",
           description: "A task management application that helps users organize daily activities, manage tasks, and track their progress through a simple and intuitive interface."


        }

    ]
    const [project] = useState<Project[]>(()=>{
 const savedPortfolio = localStorage.getItem("project" )
return savedPortfolio ? JSON.parse(savedPortfolio) : projects;
} )
   
    useEffect(()=>{
       localStorage.setItem("project", JSON.stringify(project))
     
    },[project]);
    return(
         <section 
  id="projects"
  className="w-full max-w-full min-h-screen px-4 sm:px-6 md:px-12 overflow-x-hidden dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-blue-950
    bg-slate-50  bg-linear-to-b from-blue-200 to-white-400 "
>
         <h1 className="block text-center text-4xl md:text-6xl font-bold text-purple-400 mt-20 mb-20">
  Projects
</h1>
        <div>
        {project.map((project, index) => (
<div key={project.id}
  className={` dark:bg-slate-900 dark:text-white flex flex-row md:flex-row lg:flex-col items-center gap-2  mt-6 ${
    index % 2 !== 0 ? "md:flex-row-reverse" : ""
  }`} >
    <motion.div
  key={project.id}
  className={`w-full min-w-0 flex flex-col md:flex-row items-center gap-6 mt-10 ${
  index % 2 !== 0 ? "md:flex-row-reverse" : ""
}`}
  initial={{
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}
  transition={{
    duration: 1,
    ease: "easeOut",
     repeat: Infinity,
  repeatType: "reverse",
  repeatDelay: 1 
  }}
>
  <div className="w-full md:w-1/2">
    <img
      src={project.img}
      alt={project.name}
      className="rounded-2xl object-cover h-[300px] w-full"
    />
  </div>

 
  <div className="w-full md:w-1/2 shadow-lg rounded-4xl p-8">
    <h1 className="text-3xl font-bold font-serif">
      {project.name}
    </h1>

    <p className="mt-4 text-lg">
      {project.description}
    </p>

    <a href={project.live} target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
</motion.div>
 </div>
        ))      
        }
        </div>
        </section>
    )
    
}
export default Projects