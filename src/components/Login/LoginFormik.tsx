import React from 'react';
import {useFormik} from "formik";
import s from "./Login.module.css"
import {authAPI} from "../../api/api";

export const LoginFormik = () => {
    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 3){
                errors.password = 'should be > 2'
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <span>Login In</span>
            <div>
                <input
                    className = {formik.errors.email? s.error : ''}
                    placeholder={'email'}
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && <div style={{color:'red'}}>{formik.errors.email}</div>}
            </div>
            <div>
                <input
                    className = {formik.errors.password? s.error : ''}
                    placeholder={'password'}
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && <div style={{color:'red'}}>{formik.errors.password}</div>}
            </div>
            <div>
                <label className="checkbox-input">
                    <input
                        type={"checkbox"}
                        checked={formik.values.rememberMe}
                        {...formik.getFieldProps('rememberMe')}
                    />
                    Remember Me
                </label>
            </div>
            <button type="submit">Login</button>
        </form>
    );
};
