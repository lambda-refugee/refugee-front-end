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

    //event handler that updates the form fields when it is changed by the user
    handleChanges = e => {
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        });
        
    }

    //notification popup that alerts the user of a successful sign up
    signup_notify = () => toast.info('Sign-up successful.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

    
    //axios call that posts the user login info (username & password) to the backend users database
    handleSubmit = event => {
        event.preventDefault();
    
        axios
            .post(`https://ancient-ocean-58774.herokuapp.com/register`, this.state.login)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
                //notification popup function invocation
                this.signup_notify();
                window.location = '#/';
            })
            .catch(err => console.log(err))
    }
    

    //this renders the register form component and passes it the included props
    render() {
        return (
            <div className="registration-page">

            <RegisterForm 
                handleChanges={this.handleChanges}
                submitLogin={this.handleSubmit}
                login={this.state.login}
            />

            <div className="view-bottom-image">
                <img src="../images/refugee7.png" alt="Syrian Refugees coming ashore in a boat"/>
            </div>

            </div>  
        );
    }
}

export default RegisterView;