import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from './auth/Login'
import NewsList from './news/NewsList'
import NewsForm from './news/NewsForm'

const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

export default class ApplicationViews extends Component {



  render() {
    return (
      <React.Fragment>

        <Route path="/login" component={Login} />

        <Route
          exact path="/" render={props => {
            if (isAuthenticated()) {
              return <NewsList {...props}/>
            } else {
              return <Redirect to="/login" />
            }
            // Remove null and return the component which will show news articles
          }}
        />

        <Route path="/new" render={props => {
          return <NewsForm {...props} />
        }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />
        
      </React.Fragment>
    );
  }
}
