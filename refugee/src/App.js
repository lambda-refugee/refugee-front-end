import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Route, NavLink} from 'react-router-dom';

import LoginView from './Views/LoginView';
import StoryFormView from './Views/StoryFormView';
import IndivStoryView from './Views/IndivStoryView';
import RegisterView from './Views/RegisterView';
import StoryListView from './Views/StoryListView';
import ApprovalView from './Views/ApprovalView';
import IndivApprovalView from './Views/IndivApprovalView';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      isLoggedIn: '',
    };
  }



  componentDidMount() {
    console.log("comp mounting");
    this.hydrateStateWithLocalStorage();
   }

  hydrateStateWithLocalStorage() {
    console.log("hydrating");
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  logout_notify = () => toast.info('Logout successful.', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    logout = () => {
      console.log("logging out");
      this.logout_notify();
      localStorage.clear();
      this.setState({
      jwt: '',
      isLoggedIn: '',
      });
    }
    

  render() {
    
    return (
      <div className="App">
      <ToastContainer />
        <nav>
          <h1 className="page-title">Refugee Stories</h1>

          <div className="nav-links">
            <a href="https://stoic-ardinghelli-5b5372.netlify.com/">Home</a>

            <NavLink exact to="/">Stories</NavLink>

            <NavLink exact to="/register">{this.state.isLoggedIn ? null : "Sign Up"}</NavLink> 
            
            <NavLink exact to="/story-form">Share Your Story</NavLink>

            <NavLink exact to="/login">{this.state.isLoggedIn ? null : "Login"}</NavLink>
      
            <NavLink exact to="/approvals">{this.state.isLoggedIn ? "Pending Approval" : null}</NavLink>

            <NavLink exact to="/" onClick={e => {this.logout()}}>{this.state.isLoggedIn ? "Logout" : null}</NavLink>
          </div>
        </nav>

         
        

        <Route exact path = "/"
          render={props => <StoryListView {...props} /> }
        />

        <Route exact path="/login"
          render={props => <LoginView {...props} /> }
        />

        <Route exact path="/register"
          render={props => <RegisterView {...props} /> }
        />
        
        <Route exact path="/story-form"
          render={props => <StoryFormView {...props} />}
        />

        <Route exact path="/approvals"
          render={props => <ApprovalView {...props} />}
        />

        <Route exact path='/story-list/:id' 
          render={props => <IndivStoryView {...props}  />}
        />

        <Route exact path='/approvals/:id'
          render={props => <IndivApprovalView {...props} /> }
        />

      </div>
    );
  }
}

export default App;
