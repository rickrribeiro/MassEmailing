import "./styles/main.css";
import React, {useState, useEffect} from 'react'
import Search from './pages/search/SearchPage'
import Home from './pages/home/HomePage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

interface City {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [cities, setCities] = useState<City[]>([])

  useEffect(()=>{ //exec a func  qnd a var no array mudar
    axios('http://192.168.0.31:3000/cities')
    .then(response => {
      setCities(response.data)
    })
  },[])// se deixar vazio executa uma unica vez durante todo o fluxo



  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route element={<Search />} path="/search" />
          <Route element={<Home />} path="/" />
        </Routes>
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
