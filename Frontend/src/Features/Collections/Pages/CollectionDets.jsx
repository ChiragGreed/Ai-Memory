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
        <div className="screen">
            <div className="screen__header">
                <div className="screen__eyebrow">Collection</div>
                <div className="screen__title">Collection Items</div>
            </div>
            <div className="screen__body" style={{ padding: 0 }}>
                <ItemCard items={Items} Loading={Loading} />
            </div>
        </div>
    )
}

export default CollectionDets
