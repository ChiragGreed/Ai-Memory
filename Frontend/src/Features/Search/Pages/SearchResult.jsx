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
        searchItemsHandler(query);
    }, [])


    return (
        <div>
            <ItemCard items={Items} Loading={Loading} />
        </div>
    )
}

export default SearchResult
