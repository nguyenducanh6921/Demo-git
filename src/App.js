import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Header from "./components/Header";
import LoginPage from "./components/form/LoginPage";
import RegisterPage from "./components/form/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/home" element={<HomeScreen />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
