const incrimateState = { 
    pizzasForBasket : [],
}

const conterReducer = (state = incrimateState, action) => {
    switch (action.type){
        case "ADD_PIZZA" : {
            return {...state , pizzasForBasket : [...state.pizzasForBasket , action.payload]}
        }

        case"CHANGE_PIZZA":{
            return {...state, pizzasForBasket:action.payload}
        }
        default : {
            return state
        }
    }
}

export default conterReducer




