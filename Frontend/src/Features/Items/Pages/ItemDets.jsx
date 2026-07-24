import './ItemDets.scss'
import SingleItemCard from '../Components/SingleItemCard'
import ItemCard from '../Components/ItemCard/ItemCard'
import useItems from '../Hook/useItems'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemDets = () => {

    const { context_items, getItemDetsHandler } = useItems();
    const { Items, SingleItem, Loading } = context_items;
    const { itemId } = useParams();

    useEffect(() => {
        getItemDetsHandler(itemId);
    }, [itemId])



    return (
        <div className="screen">
            <div className="screen__body">
                <div className='ItemsDetsPage'>
                    <div className='item'>
                        <SingleItemCard item={SingleItem} Loading={Loading} />
                    </div>

                    <h2 className='related_items_label'>Related suggestions</h2>

                    <ItemCard items={Items} Loading={Loading} />
                </div>
            </div>
        </div>
    )
}

export default ItemDets
