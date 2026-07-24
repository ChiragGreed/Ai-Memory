import React, { useEffect } from 'react'
import ItemCard from '../../Items/Components/ItemCard/ItemCard';
import useCollections from '../Hook/useCollections';
import useItems from '../../Items/Hook/useItems';
import { useParams } from 'react-router-dom';



const CollectionDets = () => {

    const { context_items } = useItems();
    const { context_collections, getCollectionItemsHandler } = useCollections();
    const { Items } = context_items;
    const { Loading } = context_collections;

    const {collectionId} = useParams();

    useEffect(() => {
        getCollectionItemsHandler(collectionId);
    }, []);

    return (
        <div>
            <ItemCard items={Items} Loading={Loading} />
        </div>
    )
}

export default CollectionDets
