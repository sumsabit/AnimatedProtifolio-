import { motion } from "framer-motion"


function Skills(){
    const skills =[
        {name:"Html", img:"/tools/html.png"},
        {name:"Css", img:"/tools/css.png"},
        {name:"Docker", img:"/tools/docker.png"},
        {name:"Git", img:"/tools/git.png"},
        {name:"Mysql", img:"/tools/mysql.png"},
        {name:"Nestjs", img:"/tools/nestjs.png"},
        {name:"Nextjs", img:"/tools/nextjs.png"},
        {name:"Postgresql", img:"/tools/postgresql.png"},
        {name:"Postman", img:"/tools/postman.png"},
        {name:"Python", img:"/tools/python.png"},
        {name:"React", img:"/tools/react.png"},
        {name:"Tailwind", img:"/tools/tailwind.png"},
        {name:"Node-js", img:"/tools/node-js.png"},
        {name:"Typesript", img:"/tools/typescript.png"},
        {name:"Js", img:"/tools/js.png"},

    ]

  
    return(
        <>
        <section id="skills" className="dark:bg-gradient-to-t dark:from-slate-950 dark:via-slate-900 dark:to-blue-950
        min-h-screen px-6 md:px-12 bg-linear-to-t from-blue-200 to-white-400 lg:px-16 py-16 ">
            <h1  className="inline-block rounded-full text-6xl font-bold text-purple-400 ml-30 mt-20 mb-20">Skills</h1>
         <div className="w-full h-[250px] flex justify-center items-center [perspective:1500px] overflow-hidden">

  <motion.div
    className="relative w-[180px] h-[150px]"
    style={{ transformStyle: "preserve-3d" }}
    animate={{ rotateY: 360 }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
   
  >
    {skills.map((skill, index) => (
      <div
        key={`${skill.name}-${index}`}
        className=" dark:bg-slate-900 dark:text-white  absolute top-0 left-0 w-[120px] h-[100px] flex gap-6 justify-center items-center border-2 border-white rounded-[25px] bg-white"
        style={{
          transform: `rotateY(${index * (360 / skills.length)}deg) translateZ(350px)`,
          backfaceVisibility: "hidden",
        }}
      >
        <span className="flex  flex-col items-center gap-2">
        <img
          src={skill.img}
          alt={skill.name}
          className="h-12 w-16 object-contain"
        />
        {skill.name}
        </span>
      </div>
    ))}
  </motion.div>

</div>
<div className="flex justify-center items-center perspective-[1000px]">
    <motion.div className=" dark:bg-slate-800 text-white  relative h-80 w-150 "
   style={{transformStyle : "preserve-3d",
   }}
   whileHover={{rotateX: 180 }}
   transition={{duration: 0.8}}
    > 
        <div className=" dark:bg-slate-900 dark:text-white absolute bg-blue-200 inset-0 "
        style={{backfaceVisibility: "hidden",
          transform: "rotateX(180deg)"
        }}>
<h1 className="dark:text-white text-3xl font-bold font-serif text-gray-700 p-6 mt-2">
  Backend Development & QA Testing</h1>
<p className="dark:text-white  text-lg leading-5 text-gray-600  p-6 font-sans">
  I develop server-side applications, build RESTful APIs, and work with databases using NestJS, Node.js, and PostgreSQL. I also perform software and API testing using Postman to identify bugs, verify functionality, and improve application reliability.</p>
        </div>
        <div className=" dark:bg-slate-900 dark:text-gray-100  absolute bg-blue-100 inset-0 "
        style={{ backfaceVisibility: "hidden"}}>
<h1 className="dark:text-white text-3xl font-bold font-serif text-gray-700 p-6 mt-2">
  Frontend Development</h1>
<p className="dark:text-white text-lg leading-5 text-gray-600  p-6 font-sans">
I create responsive, interactive, and user-friendly web interfaces. I enjoy transforming designs and ideas into engaging digital experiences using React, Next.js, TypeScript, and Tailwind CSS.
   </p>
        </div>
    </motion.div>
    </div>

        </section>
        </>
    )
}
export default Skills