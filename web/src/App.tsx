import "./styles/main.css";
import React, { useState, useEffect } from "react";
import {
  HomePage,
  SearchPage,
  RegisterPage,
  LoginPage,
  ErrorPage,
  CityPage,
} from "./pages";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store";

interface City {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    //exec a func  qnd a var no array mudar
    axios("http://192.168.0.31:3000/cities").then((response) => {
      setCities(response.data);
    });
  }, []); // se deixar vazio executa uma unica vez durante todo o fluxo

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
