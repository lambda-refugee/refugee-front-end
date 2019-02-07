import React from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import RegisterForm from '../components/Login/RegisterForm';

class RegisterView extends React.Component {
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

    signup_notify = () => toast.info('Sign-up successful.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

    

    handleSubmit = event => {
        event.preventDefault();
        // const endpoint = `https://ancient-ocean-58774.herokuapp.com/register`;
    
        axios
            .post(`https://ancient-ocean-58774.herokuapp.com/register`, this.state.login)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
                this.signup_notify();
                window.location = '#/';
            })
            .catch(err => console.log(err))
    }
    


    render() {
        return (
            <RegisterForm 
                handleChanges={this.handleChanges}
                submitLogin={this.handleSubmit}
                login={this.state.login}
            />
        );
    }
}

export default RegisterView;