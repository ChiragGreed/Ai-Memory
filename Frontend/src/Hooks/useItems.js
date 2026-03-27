import { useContext } from "react";
import { getItems } from "../services/itemsApi"
import { itemsContext } from "../state/itemsContext";


const useItems = () => {

    const context = useContext(itemsContext);
    const { Items, setItems, setLoading } = context;

    const getItemsHandler = async () => {
        
        try {
            setLoading(true);
            
            const response = await getItems();
            setItems(response.items);
            console.log("Items");

        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false)
        }

    }

    return ({ context, getItemsHandler })
}

export default useItems