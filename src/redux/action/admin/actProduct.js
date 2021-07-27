import axios from "axios";
import { SET_ALL_PRODUCTS,SET_ONE_PRODUCT ,SET_MESSAGE_ADD_PRODUCT} from "../../constants/types";
export const setOneProductToStore = (product) => {
    console.log("set to store")
    return {
        type: SET_ONE_PRODUCT,
        product,
    };
};
export const getOneProduct = (id) => {
    
    const url = "http://localhost:8080/projectperfume/api/product/"+id;
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                console.log('Get sucess!')
                
                dispatch(setOneProductToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const setAllProductsToStore = (products) => {
    return {
        type: SET_ALL_PRODUCTS,
        products,
    };
};
export const getAllProducts = () => {
    const url = "http://localhost:8080/projectperfume/api/products";
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                console.log('Get sucess!')
                dispatch(setAllProductsToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const addProduct = (product) => {
    const url = "http://localhost:8080/projectperfume/api/product";
    return (dispatch) => {
        return axios
            .put(url,product)
            .then((resp) => {
                dispatch({
                    type: SET_MESSAGE_ADD_PRODUCT,
                    payload: resp.data.message,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                const message =
                    (err.response && err.response.data && err.response.data.message) ||
                    err.message ||
                    err.toString();

                dispatch({
                    type: SET_MESSAGE_ADD_PRODUCT,
                    payload: message,
                });
                return Promise.reject();
            });
    };
};