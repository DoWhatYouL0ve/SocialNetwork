import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormLoginDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

export const LoginForm: FC<InjectedFormProps<FormLoginDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
        <div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
        <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/>Remember me</div>
        <div>
            <button>Submit</button>
        </div>
    </form>
    )
}

export const LoginReduxForm = reduxForm<FormLoginDataType>( {
    form: 'login'
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormLoginDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}