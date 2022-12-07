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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store";

function App() {

  return (
    <Provider store={Store}>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<SearchPage />} path="/search" />
            <Route element={<RegisterPage />} path="/register" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<CityPage />} path="/city/:name" />
            {/* 404 */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
