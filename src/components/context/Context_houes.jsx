

// sabse pehele hume context bannana hai using createContext 

import { createContext, useState } from "react";

export const Context_house = createContext(null);

export const Context_Provider = (props) => {
    const [count, setCount] = useState(0);

    return (
        <Context_house.Provider value={{ count, setCount }}>
            {props.children}
        </Context_house.Provider>
    );
};


// phir hume provider ki help iss context koo baaki componenent k saath share karna haii
