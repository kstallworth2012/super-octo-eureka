import React from 'react'
import {useState} from "react"
import {useDispatch, useSelector} from 'react-redux'

const NumberInputs = () =>{
	const dispatch = useDispatch()
	const {num1,num2}=useSelector(state => ({
		num1:state.num1,
		num2:state.num2
	}))
	const [inputs,setInputs]=useState({num1,num2})

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
        
        <label htmlFor="num1">First FOOKING NUMBER:</label>
	  <input type="number" id="num1"  value={inputs.num1}
	  onChange={handleChange}
	  name="num1"
	  />
	  <button onClick={()=>changeNum('num1')}>Update</button>
	</div>
     <div>
	        <label htmlFor="num2">Seond FOOKING NUMBER:</label>
	  <input 
		type="number" 
		id="num2"
		 value={inputs.num2}
		 onChange={handleChange}
		 name="num2"
		/>
	  <button onClick={()=>changeNum('num2')}>Update</button>

	</div>  
</> 
	)
}


export default NumberInputs