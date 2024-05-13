import {useSelector} from 'react-redux'


const InventoryMath = () => {
    const {beginInventory,purchasedInventory,endingInventory} = useSelector(state =>({
        beginInventory: state.beginInventory,
            purchasedInventory: state.purchasedInventory,
            endingInventory: state.endingInventory,
    }))

    return (

        <>
            <ol>
                <li>COST OF GOODS SOLD:{beginInventory+purchasedInventory-endingInventory}</li>
                <li>Beginning Inventory:{((beginInventory+purchasedInventory-endingInventory)+endingInventory)-purchasedInventory}</li>
                <li>Ending Inventory:{(((beginInventory+purchasedInventory-endingInventory)+endingInventory)-purchasedInventory) + purchasedInventory -(beginInventory+purchasedInventory-endingInventory)}</li>
            </ol>
        </>
    )
}


export default InventoryMath