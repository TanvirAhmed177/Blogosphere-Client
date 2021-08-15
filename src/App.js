import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

import Login from "./components/Login/Login/Login";
import NoMatch from "./components/Login/NoMatch/NoMatch";
import BlogRead from "./components/Blogs/BlogRead";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageBlogs from "./components/Dashboard/ManageBlogs/ManageBlogs";
import {
  transitions,
  types,
  positions,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Users from "./components/Dashboard/Users/Users";
import PostData from "./components/Dashboard/PostData/PostData";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  type: types.SUCCESS,
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <PrivateRoute path="/blogread/:id">
              <BlogRead></BlogRead>
            </PrivateRoute>
            <Route path="/addBlogs">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/manageBlogs">
              <ManageBlogs></ManageBlogs>
            </Route>
            <Route path="/users">
              <Users></Users>
            </Route>
            <Route path="/postData">
              <PostData></PostData>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </AlertProvider>
  );
}

export default App;
