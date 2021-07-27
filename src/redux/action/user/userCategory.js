import axios from "axios";
import { SET_ALL_CATEGORIES,SET_ONE_CATEGORY } from "../../constants/types";
export const setOneCategoryToStore = (category) => {
    console.log("set to store")
    return {
        type: SET_ONE_CATEGORY,
        category,
    };
};
export const getOneCategory = (id) => {
    
    const url = "http://localhost:8080/projectperfume/api/category/"+id;
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                console.log('Get sucess!')
                
                dispatch(setOneCategoryToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const setAllCategoriesToStore = (categories) => {
    return {
        type: SET_ALL_CATEGORIES,
        categories,
    };
};
export const getAllProducts = () => {
    const url = "http://localhost:8080/projectperfume/api/categories";
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                console.log('Get sucess!')
                dispatch(setAllCategoriesToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};