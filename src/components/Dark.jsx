import { useContext } from "react"
import { ThemeContext } from "./context/Dark_Light"

export const Dark = ()=>{

    const {theme, handleToggleTheme }= useContext(ThemeContext)

    return (
    
    <div className={`p-4 h-lvh flex flex-col justify-center items-center  ${theme ==="dark"? "bg-gray-800" : " bg-white"}`}>

        <h1 className={`my-4 text-xl  ${theme === "light"? "text-gray-800" : "text-white"}`}>Dark Light Mode Website</h1>
        <p className={`my-4 text-xl  ${theme === "light"? "text-gray-800" : "text-white"  }`}>hello !! What's up </p>
        <button onClick={handleToggleTheme}

        className="bg-blue-500 over:bg-blue-600 text-white rounded-md mt-4 p-4">  
            {theme==="dark"?"Switch to Light Mode":"Switch to Dark Mode"}


            </button>    
        
    </div>
    )
}  