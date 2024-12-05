import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = (props)=>{


    const [theme,setTheme] = useState('dark');
    
    const handleToggleTheme = ()=>{
        
        return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }
 

    return(

        <ThemeContext.Provider value={{theme,handleToggleTheme}}>

            {props.children}

        </ThemeContext.Provider>
    )

}