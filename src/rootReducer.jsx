const INITIAL_STATE = {
    num1:10,
    num2:10,
    beginInventory:12120,
    purchasedInventory:4550,
    endingInventory:700,
    totalSales:0,
    COGS:0,
    AvgInventoryCost:0,

    };

function rootReducer(state=INITIAL_STATE,action){
    // switch(action.type){
    //     case 'INCREMENT':
    //         return {...state, count:state.count + 1}
    //     default:
    //         return state
    // }

    switch(action.type){
        case "CHANGE_NUM":
            return {...state, [action.num]:action.value};

        default:
            return state;
    }

}

export default rootReducer