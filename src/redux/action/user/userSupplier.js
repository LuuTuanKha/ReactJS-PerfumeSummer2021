import axios from "axios";
import { SET_ALL_SUPPLIERS,SET_ONE_SUPPLIER } from "../../constants/types";
export const setOneSupplierToStore = (supplier) => {
    console.log("set to store")
    return {
        type: SET_ONE_SUPPLIER,
        supplier,
    };
};
export const getOneSupplier = (id) => {
    
    const url = "http://localhost:8080/projectperfume/api/supplier/"+id;
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                console.log('Get sucess!')
                
                dispatch(setOneSupplierToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const setAllSuppliersToStore = (suppliers) => {
    return {
        type: SET_ALL_SUPPLIERS,
        suppliers,
    };
};
export const getAllSuppliers = () => {
    const url = "http://localhost:8080/projectperfume/api/suppliers";
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                console.log('Get sucess!')
                dispatch(setAllSuppliersToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};