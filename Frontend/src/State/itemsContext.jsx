import { createContext, useState } from "react";

export const itemsContext = createContext();

const ItemsContextProvider = ({ children }) => {

    const [Items, setItems] = useState([]);
    const [Loading, setLoading] = useState(true);

    return (
        <itemsContext.Provider value={{ Items, setItems, Loading, setLoading }}>
            {children}
        </itemsContext.Provider>
    )
}

export default ItemsContextProvider
