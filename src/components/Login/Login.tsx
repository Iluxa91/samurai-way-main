import React from 'react';
// import {Field, FormSubmitProp, InjectedFormProps, reduxForm} from "redux-form";
// import {authAPI} from "../../api/api";
//
// // type FormDataType = {
// //     email:string
// //     password:string
// //     rememberMe:boolean
// // }
//
// const LoginForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={'Email'} name={'email'} component={'input'}/>
//             </div>
//             <div>
//                 <Field placeholder={'Password'} name={'password'} component={'input'}/>
//             </div>
//             <div>
//                 <Field type={'checkbox'} name={'rememberMe'} component={'input'}/>
//                 remember me
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     );
// };
//
// const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
//
// export const LoginPage = () => {
//     const onSubmit = (formData: FormDataType) => {
//         console.log(formData)
//         // authAPI.signIn(formData.email,formData.password,formData.rememberMe,false)
//     }
//     return <div>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit}/>
//     </div>
// };