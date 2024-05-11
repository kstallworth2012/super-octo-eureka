import {useSelector,useDispatch} from "react-redux"


const BabyMath = ()=>{
    const {num1,num2} = useSelector(state =>
        ({
            num1:state.num1,
            num2:state.num2

        }))
    return(
        <div>
            <h1>Baby Math using Redux</h1>
        <ul>
            <li>Sum: {num1 + num2}</li>
            <li>Difference:{num1 - num2} </li>
            <li>Product:{num1 * num2} </li>
            <li>Quotient:{num1/num2} </li>
        </ul>

    </div>
    )
}

export default BabyMath;