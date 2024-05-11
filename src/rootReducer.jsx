const INITIAL_STATE = {num1:10,num2:10};

function rootReducer(state=INITIAL_STATE,action){
    // switch(action.type){
    //     case 'INCREMENT':
    //         return {...state, count:state.count + 1}
    //     default:
    //         return state
    // }

    switch(action.type){
        case "CHANGE_NUMBER":
            return {...state, [action.num]:action.value};

        default:
            return state;
    }

}

export default rootReducer