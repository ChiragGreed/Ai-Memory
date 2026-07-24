import React from 'react'
import ItemCard from '../../Items/Components/ItemCard/ItemCard'
import useItems from '../../Items/Hook/useItems'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const SearchResult = () => {

    const { context_items, searchItemsHandler } = useItems();
    const { Items, Loading } = context_items;

    const [searchParams] = useSearchParams();

    const query = searchParams.get("query");

    useEffect(() => {
        if (query) {
            searchItemsHandler(query);
        }
    }, [query]);


    return (
        <div className="screen">
            <div className="screen__header">
                <div className="screen__eyebrow">Search</div>
                <div className="screen__title">Results for "{query || ''}"</div>
            </div>
            <div className="screen__body" style={{ padding: 0 }}>
                <ItemCard items={Items} Loading={Loading} />
            </div>
        </div>
    )
}

export default SearchResult
