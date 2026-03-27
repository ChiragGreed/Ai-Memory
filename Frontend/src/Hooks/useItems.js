import { useContext } from "react";
import {  getItemsApi, searchItemsApi } from "../services/itemsApi"
import { itemsContext } from "../state/itemsContext";


const useItems = () => {

    const context = useContext(itemsContext);
    const { Query, setQuery, Items, setItems, setLoading } = context;

    const getItemsHandler = async () => {

        try {
            setLoading(true);

            const response = await getItemsApi();
            setItems(response.items);

        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false)
        }

    }

    const searchItemsHandler = async (Query) => {
        
        try {
            setLoading(true)
            const res = await searchItemsApi(Query);
            setItems(res.items)

        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false)
        }

    }

    return ({ context, getItemsHandler, searchItemsHandler })
}

export default useItems