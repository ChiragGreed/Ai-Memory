import React, { useEffect } from 'react'
import ItemCard from '../../Items/Components/ItemCard/ItemCard'
import useItems from '../../Items/Hook/useItems';

const Dashboard = () => {

    const { context_items, getItemsHandler } = useItems();
    const { Items = [], Loading } = context_items;


    useEffect(() => {
        getItemsHandler();
    }, [])


    return (

        <div>
            <ItemCard items={Items} Loading={Loading} />
        </div>
    )
}

export default Dashboard
