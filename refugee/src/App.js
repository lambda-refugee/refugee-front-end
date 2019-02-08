import React, { Component } from 'react';


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

  //below code deals with saving user admin token to local storage

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

  //logout notification popup

  logout_notify = () => toast.info('Logout successful.', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    //logout function

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

    //App renders all routes and navlinks as well as passes props to all view pages
    
    return (
      <div className="App">
      <ToastContainer />
        <nav>
          <h1 className="page-title1">Refugee</h1>
          <h1 className="page-title2">Stories</h1>

          <div className="nav-links">
            <a className="to-peters-link" href="https://stoic-ardinghelli-5b5372.netlify.com/">HOME</a> 

            <NavLink className="stories-link" exact to="/">STORIES</NavLink> 

            <NavLink exact to="/register">{this.state.isLoggedIn ? null : "SIGN UP"}</NavLink> 
            
            <NavLink exact to="/story-form">SHARE YOUR STORY</NavLink> 

            <NavLink exact to="/login">{this.state.isLoggedIn ? null : "LOGIN"}</NavLink> 

            <NavLink exact to="/approvals">{this.state.isLoggedIn ? "PENDING APPROVAL" : null}</NavLink> 
      
            <NavLink exact to="/" onClick={e => {this.logout()}}>{this.state.isLoggedIn ? "LOGOUT" : null}</NavLink>
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
