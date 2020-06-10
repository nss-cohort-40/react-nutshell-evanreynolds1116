import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import NewsList from "./news/NewsList";
import NewsForm from "./news/NewsForm";
import TaskList from './tasks/TaskList';
import TaskForm from './tasks/TaskForm'
import NewsEditForm from './news/NewsEditForm'
import NewsDetail from './news/NewsDetails'

const isAuthenticated = () => sessionStorage.getItem("activeUser") !== null;

const ApplicationViews = (props) => {
  
  return (
    <React.Fragment>
      <Route path="/login" component={Login}/>

      <Route
        exact path="/news"
        render={(props) => {
          if (isAuthenticated()) {
            return <NewsList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
          // Remove null and return the component which will show news articles
        }}
      />

      <Route
        path="/news/newNews"
        render={(props) => {
          return <NewsForm {...props} />;
        }}
      />

      <Route exact path="/news/:newsId(\d+)" render={(props) => {
        return <NewsDetail newsId={parseInt(props.match.params.newsId)} {...props} />
      }} />

      <Route path="/news/:newsId(\d+)/edit" render={(props) => {
        if (isAuthenticated()) {
          return <NewsEditForm {...props} />
        } else {
            return <Redirect to="/login" />;
          }
      }} />

      <Route
        path="/friends"
        render={(props) => {
          return null;
          // Remove null and return the component which will show list of friends
        }}
      />

      <Route
        path="/messages"
        render={(props) => {
          return null;
          // Remove null and return the component which will show the messages
        }}
      />

      <Route
        path="/tasks"
        render={(props) => {
          if (isAuthenticated()) {
            return <TaskList {...props} />;
          } else {
            return <Redirect to ="/login" />
          }
          // Remove null and return the component which will show the user's tasks
        }}
      />

      <Route  
        path="/newTask"
        render={(props) => {
          return <TaskForm {...props} />
        }} />
    </React.Fragment>
  );
};

export default ApplicationViews
