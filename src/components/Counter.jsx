import { useContext } from "react"
import { CounterContext } from "./context/Counter"

export const Counter = ()=>{

    const counterContext= useContext(CounterContext)

    return (
        <>
  
        <button onClick={()=>counterContext.setCount(counterContext.count+1)}> Increment</button>
        <button onClick={()=>counterContext.setCount(counterContext.count-1)}>Decremet</button>
        </>
    )
}