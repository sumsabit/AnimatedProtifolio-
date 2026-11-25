import { useState } from "react"
import Theme from "./Theme"

function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
return(
    <div className=" dark:bg-slate-900
    fixed top-0 left-4 right-4 flex justify-between items-center p-3 bg-blue-100 rounded-2xl">
    <h1 className="dark:text-white text-gray-700 text-4xl  font-bold">
        Sumeya Sabit
    </h1>
<nav className="hidden md:flex dark:text-white items-center gap-6">
        <a href="#home" className="font-bold hover:text-purple-400">Home</a>
        <a href="#about" className="font-bold hover:text-purple-400">About</a>
        <a href="#skills" className="font-bold hover:text-purple-400">Skills</a>
        <a href="#projects" className="font-bold hover:text-purple-400">Projects</a>
        <a href="#contact" className="font-bold hover:text-purple-400">Contact</a>
   <Theme/>
    </nav>    
     <div className="flex md:hidden items-center gap-3">
        <Theme/>
        <button onClick={()=> setIsOpen(!isOpen)}
              className="text-black dark:text-white">
            {isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
            strokeLinecap="round" strokeLinejoin="round" 
            className="lucide lucide-x preview-icon"><path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/></svg>):
            (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-menu preview-icon">
            <path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>)}
            
        </button>
    </div>
    {isOpen &&(
    <nav className="absolute top-full left-0 right-0 mt-2 p-4 bg-blue-100 dark:bg-slate-900 rounded-2xl shadow-lg flex flex-col gap-4 md:hidden">
        {["Home", "About", "Skills", "Projects", "Contact" ].map((item)=>(
        <a key ={item}
           href={`#${item.toLowerCase()}`}
           onClick={()=> setIsOpen(false)}
            className="dark:text-white font-bold hover:text-purple-400"
         >
{item}
        </a>
         ))}
    </nav>
  )}
    </div>
)
}
export default NavBar      