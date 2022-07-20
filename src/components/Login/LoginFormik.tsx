import React from 'react';
import {useFormik} from "formik";
import {authAPI} from "../../api/api";

export const LoginFormik = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
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
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>
            <div>
                <label className="checkbox-input">
                    <input
                        id={'rememberMe'}
                        name={'rememberMe'}
                        type="checkbox"
                        onChange={formik.handleChange}
                    />
                    Remember Me
                </label>
            </div>
            <button type="submit">Login</button>
        </form>
    );
};
