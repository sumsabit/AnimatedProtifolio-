import Theme from "./Theme"

function NavBar(){
return(
    <div className=" dark:bg-slate-900
    fixed top-0 left-4 right-4 flex justify-between items-center p-3 bg-blue-100 rounded-2xl">
    <h1 className="dark:text-white text-gray-700 text-4xl  font-bold">
        Sumeya Sabit
    </h1>
    <nav className="dark:text-white flex gap-6">
        <a href="#home" className="font-bold hover:text-purple-400">Home</a>
        <a href="#about" className="font-bold hover:text-purple-400">About</a>
        <a href="#skills" className="font-bold hover:text-purple-400">Skills</a>
        <a href="#projects" className="font-bold hover:text-purple-400">Projects</a>
        <a href="#contact" className="font-bold hover:text-purple-400">Contact</a>
   <Theme/>
    </nav>    
  
    </div>
)
}
export default NavBar      