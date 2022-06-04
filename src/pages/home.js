import * as React from 'react'
import HandleAuthentication from '../controllers/auth';

export default class Home extends React.Component {
    
    componentDidMount = () => {
        HandleAuthentication(); 
    }

    render = () => {
        return (
            <h1> Home </h1>
        );
    }
}
