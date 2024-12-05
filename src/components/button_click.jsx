import { useContext } from "react";
import { Context_house } from "./context/Context_houes";

export const Button_click = () => {
    const use_context = useContext(Context_house);

    return (
        <div>
            <h1>Count: {use_context.count}</h1>
            <button onClick={() => use_context.setCount(use_context.count + 1)}>Click Me</button>
        </div>
    );
};
