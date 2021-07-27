import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSuppliers } from '../../redux/action/user/userSupplier';
import { addProduct } from '../../redux/action/admin/actProduct';
const FormUpdatePoduct = (props) => {
    const dispatch = useDispatch();
    const product = props.product
    const listSupplierFromStore = useSelector(state => state.suppliers)
    const [suppliers, setsuppliers] = useState(listSupplierFromStore)
    const listSizeOfProduct = [50, 100, 200, 250, 500]
    const [submitEnable, setSubmitEnable] = useState(1)
    const exportListSupplier = listSupplierFromStore.map((supplier, index) => {
        return <option key={index} value={JSON.stringify(supplier)}>{supplier.supplierId} - {supplier.supplierName}</option>
    })
    const exportListSizeOfProduct = listSizeOfProduct.map((size, index) => {
        return <option value={size}>{size}</option>

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
    const onchangeSupplier = (id)=>{
            console.log(id)
    }
    return (
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
                supplier: Yup.object().shape({
                    supplierId: Yup.number().required(),
                    supplierName: Yup.string().required(),
                })
                // email: Yup.string().email('Invalid email address').required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitEnable(0)

                // alert(JSON.stringify(values, null, 2));
                // console.log(values)
                // setSubmitting(false);
                updateButtonOnClick(values)
                setSubmitEnable(1)


            }}
        >
            {formik => (

                <form onSubmit={formik.handleSubmit}>
                    <div class=" col-4 ">
                        <label>ID:</label>
                        <input type="number" class="form-control" id="productId"
                            {...formik.getFieldProps('productId')} disabled />
                        {formik.touched.productId && formik.errors.productId ? (
                            <div>{formik.errors.productId}</div>
                        ) : null}
                    </div>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div class=" ">
                        <div class="">
                            <div class=" col-12">
                                <label>Tên sản phẩm:</label>
                                <input type="text" class="form-control" id="productName"
                                    {...formik.getFieldProps('productName')} />
                                {formik.touched.productName && formik.errors.productName ? (

                                    <div class="text-danger">{formik.errors.productName}</div>
                                ) : null}
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class=" col-4 ">
                                <label>Số lượng tồn:</label>
                                <input type="number" class="form-control" id="quantity"
                                    {...formik.getFieldProps('quantity')} disabled />
                                {formik.touched.quantity && formik.errors.quantity ? (

                                    <div class="text-danger">{formik.errors.quantity}</div>
                                ) : null}
                            </div>
                            <div class=" col-2 ">
                                <label>Đã bán:</label>
                                <input type="text" class="form-control" id="selledQTT"
                                    {...formik.getFieldProps('selledQTT')} disabled />
                                {formik.touched.selledQTT && formik.errors.selledQTT ? (

                                    <div class="text-danger">{formik.errors.selledQTT}</div>
                                ) : null}
                            </div>

                            <div className="col-2">
                                <label>Size:</label><br></br>
                                <select class="form-select"  {...formik.getFieldProps('size')}>
                                    {exportListSizeOfProduct}
                                </select>
                                {formik.touched.size && formik.errors.size ? (

                                    <div class="text-danger">{formik.errors.size}</div>
                                ) : null}
                            </div>

                            <div class=" col-4 ">
                                <label>Giá nhập vào:</label>
                                <input type="text" class="form-control" id="buyPrice"
                                    name="buyPrice"
                                    onChange={formik.handleChange}
                                    value={`${formik.values.buyPrice} VNĐ`} disabled />
                            </div>
                        </div>

                        <br></br>
                        <div className="row">

                            <div className="col-4">
                                <label>Nhà cung cấp:</label><br></br>
                                <select class="form-select"  {...formik.getFieldProps('supplier')}   >
                                    {exportListSupplier}
                                </select>

                                {formik.touched.supplier && formik.errors.supplier ? (

                                    <div class="text-danger">{formik.errors.supplier}</div>
                                ) : null}

                            </div>
                            <div className="col-2"><button className="btn btn-dark" type="button">Thêm nhà cung cấp</button></div>


                        </div>
                        <br></br>
                        <div class="row">
                            <div class=" col-12 ">
                                <label>Hạn sử dụng:</label>
                                <input type="text" class="form-control" id="manufacturingDate"
                                    name="manufacturingDate"
                                    onChange={formik.handleChange}
                                    value={formik.values.manufacturingDate} />
                            </div>
                            <br></br>
                            <div>
                                <label>Giới thiệu sản phẩm:</label>
                                <textarea className="col-12" rows="5" id="description"
                                    {...formik.getFieldProps('description')}></textarea>
                                {formik.touched.description && formik.errors.description ? (

                                    <div class="text-danger">{formik.errors.description}</div>
                                ) : null}
                            </div>

                        </div>

                    </div>


                    <br></br>
                    <div className="col-12 ">
                        <button type="submit" class={submitEnable === 1 ? "btn btn-primary w-50" : "btn btn-primary w-50 disabled"}  >Cập nhật </button>

                        <button class=" btn btn-dark w-50" type="button">Hoàn tác</button>
                    </div>
                    {/* <!-- Submit button --> */}



                </form>

            )}
        </Formik>
    );
};

export default FormUpdatePoduct
