export const addPizza=(object)=>({
    type:"ADD_PIZZA", 
    payload : object
})

export const changePizza=(array)=>({
    type:"CHANGE_PIZZA",
    payload:array
})