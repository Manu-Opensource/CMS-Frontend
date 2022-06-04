import * as React from 'react'
import { ApiRequest } from '../controllers/api'

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
            <div>
                <h1> Login </h1>
                <form onSubmit={this.login}>
                    <input name="username" placeholder="username"/>
                    <input name="password" placeholder="password" type="password"/>
                    <input type="submit" value="Login" /> 
                </form>
            </div>
        );
    }
}
