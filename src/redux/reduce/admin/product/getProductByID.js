import {SET_ONE_PRODUCT} from "../../../constants/types"

let inittial = {}
let reducer = (state = inittial,action ) =>{
    let newState = {...state}
	let {type,product} = action;
	if(type===SET_ONE_PRODUCT){
        
		newState = product
		return newState;
	}
	return state
}
export default reducer