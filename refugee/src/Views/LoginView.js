import React from 'react';
import axios from 'axios';

import {adminLogIn} from '../store/actions';

import LoginForm from '../components/Login/LoginForm';

class LoginView extends React.Component {
    state= {
        login: {
            
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({ 
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        });   
    }

    

    handleSubmit = event => {
        event.preventDefault();
        
        const endpoint = 'https://ancient-ocean-58774.herokuapp.com/login';

        axios
            .post(endpoint, this.state.login)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
                //below code redirects user upon successful login
                window.location = "/approvals";
            
            })
            .catch(err => console.log(err))
            window.location = "/";
        
    }
    
//props passed to LoginForm

    render() {
        return (
            <LoginForm 
                handleChanges={this.handleChanges}
                submitLogin={this.handleSubmit}
                login={this.state.login}
            />
        );
    }
}

export default LoginView;