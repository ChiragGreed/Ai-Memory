import { useContext } from "react";
import { getItemsApi, getItemDetailsApi, resurfacingItemsApi, searchItemsApi } from '../Services/itemsApi.js'
import { itemsContext } from "../State/ItemsContext";


const useItems = () => {

    const context_items = useContext(itemsContext);
    const { setItems, setSingleItem, setResurfacedItems, setLoading } = context_items;

    const getItemsHandler = async () => {

        try {
            setLoading(true);

            const response = await getItemsApi();
            setItems(response.items);
            setLoading(false);

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
            setLoading(true);
            setItems(null);
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

    const resurfaceItemsHandler = async () => {

        try {
            setLoading(true);

            const response = await resurfacingItemsApi();
            setResurfacedItems(response.items);
            setLoading(false);

        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false)
        }

    }

    const getItemDetsHandler = async (itemId) => {
        try {
            setLoading(true);
            const response = await getItemDetailsApi(itemId)
            setItems(response.related);
            setSingleItem(response.item);
        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false);
        }
    }

    return ({ context_items, getItemsHandler, resurfaceItemsHandler, searchItemsHandler, getItemDetsHandler })
}

export default useItems