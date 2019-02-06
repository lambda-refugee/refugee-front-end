import React, { Component } from 'react';

import {Route, NavLink} from 'react-router-dom';

import LoginView from './Views/LoginView';
import StoryFormView from './Views/StoryFormView';
import IndivStoryView from './Views/IndivStoryView';
import RegisterView from './Views/RegisterView';
import StoryListView from './Views/StoryListView';
import ApprovalView from './Views/ApprovalView';
import IndivApprovalView from './Views/IndivApprovalView';

import './App.css';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">Home</NavLink>

            {/* <NavLink exact to="/register">Sign Up</NavLink> */}
            
            <NavLink exact to="/story-form">Share Your Story</NavLink>

            <NavLink exact to="/login">Login</NavLink>

            <NavLink exact to="/approvals">Pending Approval</NavLink>
          </div>
        </nav>

        <button>Log Out</button>

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
