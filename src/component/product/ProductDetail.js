import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getOneProduct } from "../../redux/action/admin/actProduct"

const ProductDetail = () => {
    const { id } = useParams()
    const history = useHistory();
    const dispatch = useDispatch();
    const productsFromStore = useSelector((state) => state.productByID);
    let product = productsFromStore
    useEffect(() => {
        
        dispatch(getOneProduct(id));
        product = productsFromStore;
        // }
    }, [])




    return (
        <div className="">
   
            <div className="row" >
                <div className="col-12  text-center bg-light">
                    <br></br>
                    <strong>TK'Shop <i class="fas fa-angle-right"></i> Đặt hàng <i class="fas fa-angle-right"></i> {product.productName}</strong>

                </div>
                <div className="col-lg-3 col-sm-4 gap-3">
                    <img className="img-thumbnail" src={product.image} alt="" ></img>

                </div>
                <div className="col-lg-9 col-sm-4 gap-3">
                    <div className="justify-content-center text-center">
                        <br></br>
                        <strong><h3> {product.productName}</h3></strong>
                        <br></br>
                        <button className="btn btn-danger w-100">Đặt mua</button>
                    </div>
                    

                    
                </div>

            </div>
            
            
          

        </div>
    )
}

export default ProductDetail
