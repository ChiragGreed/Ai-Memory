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
        <div className="screen">
            <div className="screen__header">
                <div className="screen__eyebrow">Dashboard</div>
                <div className="screen__title">All Saved Items</div>
            </div>
            <div className="screen__body" style={{ padding: 0 }}>
                <ItemCard items={Items} Loading={Loading} />
            </div>
        </div>
    )
}

export default Dashboard
