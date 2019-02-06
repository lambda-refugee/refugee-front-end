import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {adminLogIn} from '../store/actions';

import LoginForm from '../components/Login/LoginForm';

class LoginView extends React.Component {
    state= {
        login: {
            
            username: '',
            password: ''
        },
        // isLoggedIn: null,
    };

    handleChanges = e => {
        this.setState({ 
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            },
            // isLoggedIn: {
            //     ...this.state.login,
            //     if () 

            //     }
            // }

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

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(
    mapStateToProps,
    {}
)(LoginView);