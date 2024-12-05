import { createContext, useState } from "react";

// Create the CounterContext

export const CounterContext = createContext(null);

// Create the CounterProvider component
export const CounterProvider = (props) => {
    const [count, setCount] = useState(5);

    return (
        
        <CounterContext.Provider value={{ count, setCount }}>
            {props.children}
        </CounterContext.Provider>

    );
};
