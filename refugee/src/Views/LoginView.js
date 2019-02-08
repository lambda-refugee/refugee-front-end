import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {adminLogIn} from '../store/actions';

import { ToastContainer, toast, Zoom, Flip } from 'react-toastify';

import LoginForm from '../components/Login/LoginForm';

class LoginView extends React.Component {
    state= {
        login: {
            
            username: '',
            password: ''
        },
        isLoggedIn: '',
    };

    //event handler that updates the form fields to whatever is being typed by the user
    handleChanges = e => {
        this.setState({ 
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            },

        });   
    }


    //notification error pop up if the user types in an incorrect user name or password
    login_error = () => toast.error('Login failed. Please check username and password.', {
        position: "bottom-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        autoClose: false,
        transition: Flip,
      });

    
    //event handler that 
    handleSubmit = event => {
        event.preventDefault();
        
        const endpoint = 'https://ancient-ocean-58774.herokuapp.com/login';

        axios
            .post(endpoint, this.state.login)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
                localStorage.setItem('isLoggedIn', true);
                this.state.isLoggedIn = true;
                //below code redirects user upon successful login
                window.location = "#/approvals";
                document.location.reload(true);
                
                
            
            })
            .catch(err => {
                console.log(err);
                this.login_error();
            })
    }
    
//props passed to LoginForm

    render() {
        return (

            <div>

            <LoginForm 
                handleChanges={this.handleChanges}
                submitLogin={this.handleSubmit}
                login={this.state.login}
            />

            <div className="view-bottom-image">
            <img src="../images/refugee2.png" alt="Syrian Refugees coming ashore in a boat"/>
            </div> 

            </div>
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