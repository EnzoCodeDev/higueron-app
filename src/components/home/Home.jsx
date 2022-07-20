import React from "react";
// import components
import Hero from "../Hero";
import Brands from "../Brands";
import About from "../About";
import Portfolio from "../Portfolio";
import Skills from "../Skills";
import Services from "../Services";
import Contact from "../Contact";
import Testimonials from "../Testimonials";
import BackTopBtn from "../BackTopBtn";
import "./home.scss";
import { AnimationPage } from "../animation/AnimationPage";

export const Home = () => {
  return (
    <AnimationPage>
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <BackTopBtn />
    </AnimationPage>
  );
};
