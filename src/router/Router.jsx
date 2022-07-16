import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Home } from "../components/home/Home";
import "../styles/styles.scss";
import "./router.scss";
import { Translate } from "../view/translate/Translate";
import { Myths } from "../view/myths/Myths";
export const Router = () => {
  return (
    <BrowserRouter>
      <div className="container-root-main">
        <div className="container-root-header">
          <Header />
        </div>
        <div className="container-root-body">
          <Routes>
            <Route path="home" exact element={<Home />} />
            <Route path="translate" exact element={<Translate />} />
            <Route path="myths" exact element={<Myths />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
