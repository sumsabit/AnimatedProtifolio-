
import { useState } from "react";
import Theme from "./Theme";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        <div className="fixed top-0 left-4 right-4 z-50 flex justify-between items-center p-3 bg-blue-100 dark:bg-slate-900 rounded-2xl">

         
            <h1 className="text-gray-700 dark:text-white text-2xl md:text-4xl font-bold">
                Sumeya Sabit
            </h1>

            
            <nav className="hidden md:flex items-center gap-6 text-gray-700 dark:text-white">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="font-bold hover:text-purple-400"
                    >
                        {item}
                    </a>
                ))}
                <Theme />
            </nav>

           
            <div className="flex items-center gap-3 md:hidden">
                <Theme />

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="dark:text-white"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 5h16" />
                            <path d="M4 12h16" />
                            <path d="M4 19h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="absolute top-full left-0 right-0 mt-2 p-4 bg-blue-100 dark:bg-slate-900 rounded-2xl shadow-lg flex flex-col gap-4 md:hidden">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="font-semibold text-gray-700 dark:text-white hover:text-purple-400"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            )}
        </div>
    );
}

export default NavBar; 