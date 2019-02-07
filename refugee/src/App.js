import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Route, NavLink} from 'react-router-dom';

import NotificationSystem from 'react-notification-system';

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



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      isLoggedIn: '',
      notify: false,
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
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  logout = () => {
    console.log("logging out");
    this.logout_notify();
    localStorage.clear();
    this.setState({loggedIn: false});
    window.location = "/";
    document.location.reload(true);
    
    
  }

  render() {
    
    return (
      <div className="App">
      <ToastContainer />
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">Stories</NavLink>

            <NavLink exact to="/register">{this.state.isLoggedIn ? null : "Sign Up"}</NavLink> 
            
            <NavLink exact to="/story-form">Share Your Story</NavLink>

            <NavLink exact to="/login">{this.state.isLoggedIn ? null : "Login"}</NavLink>
      
            <NavLink exact to="/approvals">{this.state.isLoggedIn ? "Pending Approval" : null}</NavLink>

            <NavLink exact to="/" onClick={e => {this.logout()}}>{this.state.isLoggedIn ? "Logout" : null}</NavLink>
          </div>
        </nav>

        <div>
          <img src="images/refugee1.png" />

        </div>

        <button onClick={e => {this.logout_notify()}} >Logout</button>
        
        

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


