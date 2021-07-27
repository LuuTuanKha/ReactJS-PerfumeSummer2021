import {SET_ALL_CATEGORIES,SET_ONE_CATEGORY} from "../../../constants/types"

let inittial = []
let reducer = (state = inittial,action ) =>{
    let newState = {...state}
	let {type,categories} = action;
	if(type===SET_ALL_CATEGORIES){
        
		newState = categories
		return newState;
	}
	return state
}
export default reducer
