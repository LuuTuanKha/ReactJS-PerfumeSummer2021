import { SET_ALL_PRODUCTS } from "../../constants/types";

let inittial = []
let reducer = (state = inittial,action ) =>{
    let newState = [...state]
	let {type,products} = action;
	if(type===SET_ALL_PRODUCTS){
        
		newState = products
		return newState;
	}
	return state
}
export default reducer