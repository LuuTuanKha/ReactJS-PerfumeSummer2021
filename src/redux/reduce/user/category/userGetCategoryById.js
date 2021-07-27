import {SET_ONE_CATEGORY} from "../../../constants/types"

let inittial = {}
let reducer = (state = inittial,action ) =>{
    let newState = {...state}
	let {type,category} = action;
	if(type===SET_ONE_CATEGORY){
        
		newState = category
		return newState;
	}
	return state
}
export default reducer
