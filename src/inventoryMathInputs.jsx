import {useState} from "react"
import {useDispatch, useSelector} from 'react-redux'

const InventoryMathInputs =()=>{
   	const dispatch = useDispatch()

    const {beginInventory,purchasedInventory,endingInventory} = useSelector(state =>({
            beginInventory:state.beginInventory,
            purchasedInventory:state.purchasedInventory,
            endingInventory:state.endingInventory,
    }))

    	const [inputs,setInputs]=useState({beginInventory,purchasedInventory,endingInventory})

	const handleChange = e =>{
		const {value , name} = e.target
		setInputs(inputs =>({...inputs,[name]:+value}))
	}



	const changeNum = (num)=>{
		dispatch({
			type:"CHANGE_NUM",
			num,
			value: inputs[num]
		})
	}
    return(
        <>
            <div>
                <label htmlFor="beginInventory">Begin Inventory</label>
                <input type="number"
                id="beginInventory"
                name="beginInventory"
                value={inputs.beginInventory}
                onChange={handleChange}/>
                <button onClick={()=>changeNum('beginInventory')}>Update</button>
            </div>

            <div>
                <label htmlFor="purchasedInventory">Purchased Inventory</label>
                <input
                    type="number"
                    id="purchasedInventory"
                    name="purchasedInventory"
                    value={inputs.purchasedInventory}
                    onChange={handleChange}
                />
                <button onClick={()=>changeNum('purchasedInventory')}>Update</button>
            </div>

            <div>
                <label htmlFor="endingInventory">Ending Inventory</label>
                <input
                    type="number"
                    id="endingInventory"
                    name="endingInventory"
                    value={inputs.endingInventory}
                        onChange={handleChange}
                />
                <button onClick={()=>changeNum('endingInventory')}>Update</button>
            </div>

        </>
    )
}

export default InventoryMathInputs