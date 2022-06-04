import * as React from 'react'
import { ApiRequest } from '../controllers/api';
import { ErrorText } from '../components/text';
import TextInput from '../components/input';
import Button from '../components/button';
import Logo from '../components/logo';

export default class Login extends React.Component {
    state = {
        valid: true
    };

    login = async (event) => {
        event.preventDefault() 
        const res = await ApiRequest("login", {
            username: event.currentTarget.elements.username.value,
            password: event.currentTarget.elements.password.value
        });
        if (res.ok)
            window.location.assign("/");
        else
            this.setState({valid: false});
    }
    
    render = () => {
        return (
            <div className="bg-slate-200 h-screen w-screen grid content-center justify-center">
                <form onSubmit={this.login} className="bg-slate-50 pl-24 pr-24 pb-8 pt-8 shadow-lg rounded-lg grid">
                    <Logo/>
                    <TextInput name="username" placeholder="Username" />
                    <TextInput name="password" placeholder="Password" password />
                    {this.state.valid ?
                    <div/>
                    :
                    <ErrorText className="text-center mt-2"> Invalid Credentials </ErrorText>
                    }
                    <Button formSubmit value="Login" className="mt-4 m-auto w-full p-4"/>
                </form>
            </div>
        );
    }
}
