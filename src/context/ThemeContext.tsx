import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
type ThemeContextType= {
    theme: "light" | "dark"  ,
    setTheme: (theme: "light" | "dark") => void,
    toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export function ThemeProvider({children}: {children: ReactNode}){
const [theme, setTheme] = useState<"light" | "dark">(()=>{
     const savedTheme = localStorage.getItem("theme")
     if(savedTheme === "light" || savedTheme === "dark"){
        return savedTheme
     }
   return "light"
});
const toggleTheme = () =>{
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
}
 useEffect(( )=>{
    document.documentElement.classList.toggle(
        "dark", theme === "dark"
        
    )
        localStorage.setItem("theme", theme)
    }, [theme])
return(
    <ThemeContext.Provider value ={{ theme, setTheme, toggleTheme }}>
       { children}
    </ThemeContext.Provider>
    )
}
export function useThemeContext( ){
     const context = useContext(ThemeContext)
    
 if(context === undefined){
 throw new Error("useThemContext must be used within ThemeProvider")
 }     
    
return context
}