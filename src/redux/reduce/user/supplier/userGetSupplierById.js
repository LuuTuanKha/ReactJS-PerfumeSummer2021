import {SET_ONE_SUPPLIER} from "../../../constants/types"

let inittial = {}
let reducer = (state = inittial,action ) =>{
    let newState = {...state}
	let {type,supplier} = action;
	if(type===SET_ONE_SUPPLIER){
        
		newState = supplier
		return newState;
	}
	return state
}
export default reducer
