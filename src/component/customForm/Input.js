import React from 'react'
import { Formik, Form,Field, ErrorMessage } from 'formik';
import TextError from './TextError';


const Input = (props) => {
    const {label,name, ...rest} = props
    return (
        <div >
            <label htmlFor={name}><strong>{label}</strong></label>
            <Field id={name} name={name} {...rest} class="form-control" />
            <ErrorMessage name = {name} component={TextError}/>
        </div>
    )
}

export default Input
