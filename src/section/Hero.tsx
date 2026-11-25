import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Hero() {
  const titles = [
  "Junior Software Developer",
  "Full-Stack Developer",
  "React Developer",
  "Web Developer",
  "Web Security Analyst",
  "QA Tester",
];
const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => {
        if (prevIndex === titles.length - 1) {
    return 0;
  }
      return prevIndex +1
    });
  }, 2000);

  return () => clearInterval(interval);
}, []);
  return (
<section
  id="home"
  className="w-full max-w-full overflow-x-clip dark:bg-gradient-to-t dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 min-h-screen px-4 sm:px-6 md:px-12 lg:px-16 py-16 mt-15 bg-gradient-to-t from-blue-200 to-white transition-colors duration-500"
>

   <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12 md:mt-20">
        
       <div className="order-2 lg:order-1 space-y-10 md:space-y-20 min-w-0">

          <div>
           <p className="text-4xl sm:text-5xl lg:text-7xl font-bold font-sans text-purple-400">
  Hi There!
</p>

<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-sans text-purple-400 break-words">
  I'm Sumeya Sabit
</h1>
          </div>
       <div className="overflow-hidden min-h-16">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      
      initial={{ x: 100, y: 30, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: -100, y: -30, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="inline-block max-w-full ml-0 sm:ml-6 rounded-2xl p-px moving-border"
    >
   <span className="block rounded-2xl bg-blue-200 dark:bg-slate-800 px-2 py-3 text-xl sm:text-2xl lg:text-4xl font-bold text-gray-700 dark:text-gray-100 break-words">
  {titles[currentIndex]}
</span>
    </motion.div>
  </AnimatePresence>
</div>
        </div>

        
        <div className="order-1 lg:order-2 flex justify-center items-center">
         <img
  src="/profile.png"
  alt="profile"
  className="h-72 sm:h-80 lg:h-96 max-w-full w-auto object-contain"
/>
        </div>        
      
      </div>
    </section>
  );
}

export default Hero;
