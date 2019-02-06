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

  logout = () => {
    console.log("logging out");
    localStorage.clear();
    this.setState({loggedIn: false});
    document.location.reload(true);
  }

  render() {
    
    return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink exact to="/">Home</NavLink>

            <NavLink exact to="/register">{this.state.isLoggedIn ? null : "Sign Up"}</NavLink> 
            
            <NavLink exact to="/story-form">Share Your Story</NavLink>

            <NavLink exact to="/login">{this.state.isLoggedIn ? null : "Login"}</NavLink>
      
            <NavLink exact to="/approvals">{this.state.isLoggedIn ? "Pending Approval" : null}</NavLink>
          </div>
        </nav>

        <button onClick={e => {this.logout()}} >Log Out</button>

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

// const mapStateToProps = state => ({
//   isLoggedIn: state.isLoggedIn
// });

// export default connect(
//   mapStateToProps,
//   {}
// )(App);

export default App;
