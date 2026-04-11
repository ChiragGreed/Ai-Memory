import { useContext } from "react";
import { downloadExtensionApi, getItemsApi, getRelatedItemApi, getSingleItemApi, resurfacingItemsApi, searchItemsApi } from '../Services/itemsApi.js'
import { itemsContext } from "../State/ItemsContext";


const useItems = () => {

    const context_items = useContext(itemsContext);
    const { setItems, setSingleItem, setResurfacedItems, setLoading } = context_items;

    const downloadExtensionHandler = async () => {
        const response = await downloadExtensionApi();

        const url = window.URL.createObjectURL(new Blob([response]));

        return url;
    }

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

    const getSingleItemHandler = async (itemId) => {
        try {
            setLoading(true);

            const response = await getSingleItemApi(itemId);
            setSingleItem(response.item);
            setLoading(false);

        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false)
        }

    }

    const getRelatedItemHandler = async (itemId) => {

        try {
            setLoading(true);

            const response = await getRelatedItemApi(itemId);
            setItems(response.related);
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

    return ({ context_items, downloadExtensionHandler, getItemsHandler, getSingleItemHandler, resurfaceItemsHandler, getRelatedItemHandler, searchItemsHandler })
}

export default useItems