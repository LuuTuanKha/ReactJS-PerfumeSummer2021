import {SET_ALL_SUPPLIERS} from "../../../constants/types"

let inittial = []
let reducer = (state = inittial,action ) =>{
    let newState = {...state}
	let {type,suppliers} = action;
	if(type===SET_ALL_SUPPLIERS){
        
		newState = suppliers
		return newState;
	}
	return state
}
export default reducer
