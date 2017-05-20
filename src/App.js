import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from "./Header/Header.js";
import Get from "./Components/Get/Get.js";
import Films from "./Components/StarWars/Films.js";
import Post from "./Components/Post/Post.js";
import DisplayUser from "./Components/DisplayUsers/DisplayUser.js";
import Login from "./Components/Login/Login.js";
import Dashboard from "./Components/Login/Dashboard.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Get} />
          <Route path="/film" component={Films} />
          <Route path="/post" component={Post} />
          <Route path="/users" component={DisplayUser} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard/:userId" component={Dashboard} />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
