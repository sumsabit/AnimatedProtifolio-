import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-blue-950
    bg-slate-50  bg-linear-to-b from-blue-200 to-white-400  py-20 px-6 md:px-16 ">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">

        
        <div className="space-y-6">

          <span className="inline-block rounded-full text-6xl font-bold text-purple-400">
            About Me
          </span>

          <h1 className="dark:text-white text-3xl md:text-5xl font-bold font-serif text-gray-700">
            Who I Am
          </h1>

          <p className="dark:text-white text-lg leading-8 text-gray-600">
            I am a Computer Science graduate with hands-on
            experience in web development and web security.
            A passionate Full Stack Developer who enjoys
            building modern, responsive, and user-friendly
            web applications.

            I work across frontend and backend technologies
            to transform ideas into practical digital solutions.
            I am motivated to apply my skills in cybersecurity
            and software development in real-world environments.
          </p>
         <motion.span className="flex flex-wrap gap-3 sm:gap-6"
        initial={{opacity: 0, y: -50}}
whileInView={{opacity: 1, y:0}}
viewport={{once: false}}
transition={{duration: 1, ease:"easeOut", repeat:1
}}>
  <a
    href="https://github.com/sumsabit"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="rounded-2xl p-4 dark:text-white hover:scale-80 shadow transition-all duration-300 hover:bg-gray-900 hover:text-white"
  >
    <svg width="30" height="30" viewBox="0 0 512 512" fill="currentColor">
      <path d="M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z" />
    </svg>
  </a>

  
  <a
    href="https://www.linkedin.com/in/sumsabit"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="rounded-2xl p-4 dark:text-white hover:scale-80 shadow transition-all duration-300 hover:bg-blue-600 hover:text-white"
  >
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512" fill="currentColor">
            
              <path d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"/></svg>
  </a>

 
  <a
    href="mailto:sumeyasabit1@gmail.com"
    aria-label="Email"
     className="dark:text-white  rounded-2xl p-4 hover:scale-80 shadow transition-all duration-300 hover:bg-gray-900 hover:text-white"
  >
   <svg xmlns="http://www.w3.org/2000/svg" width="36" 
   height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
     className="lucide lucideMail previewIcon">
   <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
   <rect x="2" y="4" width="20" height="16" rx="2"/></svg>
  </a>
    <a
    href="https://t.me/sumsabit"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Telegram"
    className="dark:text-white rounded-2xl p-4 shadow hover:scale-80 transition-all duration-500 hover:bg-sky-500 hover:text-white hover:scale-80"
  >
   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  viewBox="0 0 512 512" fill="currentColor">
           
              <path d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM371 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5c-2.2 .5-37.1 23.5-104.6 69.1-9.9 6.8-18.9 10.1-26.9 9.9-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3 .6-4.5 6.7-9 18.4-13.7 72.3-31.5 120.5-52.3 144.6-62.3 68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9 2 1.7 3.2 4.1 3.5 6.7 .5 3.2 .6 6.5 .4 9.8z"/></svg>
  </a>

</motion.span>
  <a
            target="_blank"
            rel="noopener noreferrer"
            href="/CV.pdf"
            download
           className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-purple-400 py-3 px-6 text-white transition-colors duration-300 before:absolute before:inset-0 before:-translate-x-full before:bg-purple-600 before:transition-transform before:duration-500 hover:before:translate-x-0"
          >
          <span className="relative z-10"> Get My CV</span> 

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 15V3" />
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
            </svg>
          </a>
          </div>
          
         
            
          <div className="space-y-6">
            <h2 className="dark:text-white text-2xl font-bold text-gray-700">
              Education
            </h2>

            <div className="dark:text-white border-l-4 border-purple-300 pl-6">
              <h3 className="dark:text-white text-xl font-bold text-gray-700">
                B.Sc. Computer Science
              </h3>

              <p className="text-gray-600 dark:text-white">
                Jimma University, Ethiopia
              </p>

              <p className="text-purple-400 font-medium">
                Graduated: 2026
              </p>
            </div>
          

          <div className="dark:text-white space-y-6">
            <h2 className="dark:text-white text-2xl font-bold text-gray-700">
              Experience
            </h2>

            <div className=" dark:text-white border-l-4 border-purple-300 pl-6">
              <h3 className="dark:text-white text-xl font-bold text-gray-700">
                Web Penetration Testing Intern
              </h3>

              <p className="dark:text-white text-gray-600">
                INSA (Information Network Security Administration)
              </p>

              <p className="dark:text-white text-gray-500">
                Vulnerability assessment, Linux, networking.
              </p>
            </div>

            <div className="dark:text-white border-l-4 border-purple-300 pl-6">
              <h3 className="dark:text-white text-xl font-bold text-gray-700">
                Full Stack Developer
              </h3>

              <p className="dark:text-white text-gray-500">
                Building responsive, interactive user interfaces
                with scalable server-side architecture and
                database design.
              </p>
            </div>
           </div>
          </div>

</div>          
    </section>
  );
}

export default About;
