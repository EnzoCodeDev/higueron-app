import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Home } from "../components/home/Home";
import "../styles/styles.scss";
export const Router = () => {
  return (
    <BrowserRouter>
      <div className="container-root-main">
        <Header />
        <Routes>
          <Route path="home" exact element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
