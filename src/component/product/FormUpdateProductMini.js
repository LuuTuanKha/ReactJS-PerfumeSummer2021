import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllSuppliers } from '../../redux/action/user/userSupplier';
import { addProduct } from '../../redux/action/admin/actProduct';
import * as Yup from 'yup';
import Select from '../customForm/Select';
import Input from '../customForm/Input';
import FormikControl from '../customForm/FormikControl';
import TextArea from '../customForm/TextArea';






// And now we can use these
const FormUpdatePoductMini = (props) => {
    const dispatch = useDispatch();
    const product = props.product
    const listSupplierFromStore = useSelector(state => state.suppliers)
    const [suppliers, setsuppliers] = useState(listSupplierFromStore)
    const listSizeOfProduct = [50, 100, 200, 250, 500]
    const [submitEnable, setSubmitEnable] = useState(1)

    const exportListSupplier = listSupplierFromStore.map((supplier, index) => {
        return <option key={index} value={supplier}>{supplier.supplierId} - {supplier.supplierName}</option>
    })
    const ListSupplier = listSupplierFromStore.map((supplier, index) => {
        return { value: index, key: supplier.supplierId + " - " +  supplier.supplierName }
    })
    const ListSupplierObject = listSupplierFromStore.map((supplier, index) => {
        return { value: supplier, key: supplier.supplierId + " - " +  supplier.supplierName }
    })

    const exportListSizeOfProduct = listSizeOfProduct.map((size, index) => {
        return { value: size , key: size}

    })
    const updateButtonOnClick = (product) => {
        var temp = product.supplier
        product.supplier = JSON.parse(temp)

        console.log(product)
        dispatch(
            addProduct(
                product
            )
        )
            .then(() => {
                window.alert("Cập nhật sản phẩm thành công!");
                // window.location.reload();
            })
            .catch(() => {
                window.alert("Cập nhật sản phẩm  thất bại");

            });
    }
    useEffect(() => {

        dispatch(getAllSuppliers());
        console.log(listSupplierFromStore)
        return () => {
        }
    }, [])
    return (
        <>
            <h1 className="text-center">CẬP NHẬT SẢN PHẨM!</h1>
            <Formik
                enableReinitialize
                initialValues={product}
                validationSchema={Yup.object({
                    productName: Yup.string()
                        .max(50, 'Tên không được quá 50 ký tự')
                        .min(10, 'Tên không được ít hơn 10 ký tự')
                        .required('Thông tin này là bắt buộc'),
                    description: Yup.string()
                        .max(5000, 'Tên không được quá 500 ký tự')
                        .min(0, 'Tên không được ít hơn 10 ký tự'),
                    // .required('Thông tin này là bắt buộc'),
                    quantity: Yup.number()

                        .min(0, '>0')
                        .required('Required'),
                    selledQTT: Yup.number()
                        .min(0, '>0')
                        .required('Required'),
                    size: Yup.number()
                        .min(0, '>0')
                        .required('Required'),
                    buyPrice: Yup.number()
                        .min(0, '>0')
                        .required('Required'),
                    supplier: Yup.object().shape({
                        supplierId: Yup.number().required("Required"),
                        supplierName: Yup.string().required("Required"),
                    })
                    // email: Yup.string().email('Invalid email address').required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitEnable(0)

                    // alert(JSON.stringify(values, null, 2));
                    console.log(values)
                    // setSubmitting(false);
                    updateButtonOnClick(values)
                    setSubmitEnable(1)


                }}
            >
                <Form>
                    <div className="">
                        <div class="col-12">
                            <FormikControl
                                control="input"
                                label="Tên sản phẩm:"
                                name="productName"
                                type="text"
                            />
                        </div>

                        <br></br>
                        <div className="row">
                            <div className="col-4">
                                <FormikControl
                                    control="input"
                                    label="Số lượng tồn:"
                                    name="quantity"
                                    type="number"
                                    placeholder="Số lượng tồn"
                                    disabled
                                />

                            </div>
                            <div className="col-2">
                                <FormikControl
                                    control="input"
                                    label="Đã bán:"
                                    name="selledQTT"
                                    type="number"
                                    placeholder="Đã bán"
                                    disabled
                                />

                            </div>
                            <div className="col-2">
                                <FormikControl
                                    control="select" label="Size" name="size"
                                    type="number" options={exportListSizeOfProduct}>
                                  
                                </FormikControl>
                            </div>
                            <div className="col-4">
                                <FormikControl
                                    control='input'
                                    label="Giá nhập vào (VND):"
                                    name="buyPrice"
                                    type="number"
                                    placeholder="Giá nhập vào (VND):"
                                // disabled
                                />

                            </div>

                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-6">
                            <FormikControl
                                    control="select"
                                    label="Nhà cung cấp" name="supplier"
                                    options={ListSupplierObject} 
                                    
                                   />
                            </div>
                            <div className="col-6">
                                {/* <FormikControl
                                    control="select"
                                    label="Nhà cung cấp" name="supplier"
                                    options={ListSupplier} 
                                   /> */}


                               
                            </div>
                        </div>

                        <br></br>
                        <FormikControl
                            control='textarea'
                            label="Giới thiệu sản phẩm:"
                            rows="5"
                            name="description"
                            type="text"
                            placeholder="description"
                        />





                        <br></br>
                        <div className="">
                            <button type="submit" className="btn btn-primary w-50">Cập nhật</button>
                            <button type="button" className="btn btn-dark w-50">Hoàn tác</button>
                        </div>

                    </div>
                </Form>

            </Formik>
        </>
    );
};
export default FormUpdatePoductMini