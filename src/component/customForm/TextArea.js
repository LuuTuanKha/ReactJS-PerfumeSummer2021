import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const TextArea = (props) => {
    const {label,name, ...rest} = props
    return (
        <div >
            <label htmlFor={name}><strong>{label}</strong></label>
            <Field as='textarea' id={name} name={name} {...rest} class="form-control" />
            <ErrorMessage name = {name} component={TextError}/>
        </div>
    )
}

export default TextArea
