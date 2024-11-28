import {createStore} from"redux"
import conterReducer from "./redux"

const store=createStore(conterReducer)

export default store