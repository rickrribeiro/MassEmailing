import React, { useState, useEffect } from "react";
import "./styles/main.css";
import {
  HomePage,
  SearchPage,
  RegisterPage,
  LoginPage,
  ErrorPage,
  CityPage,
} from "./pages";

// import * as dotenv from 'dotenv'
// dotenv.config()
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store";

function App() {

  return (

        <div className="App">
        <Router>
             <Header />
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/search">
              <SearchPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/city/:name">
              <CityPage />
            </Route>
            <Route  path="*">
              <ErrorPage />
            </Route>
          </Switch>
            <Footer />
        </Router>
        
        
       
      </div>
 
  );
}

import { connect } from "react-redux";
const mapStateToProps = (state) => {
	return {
    user: state.userState?.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
	getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
