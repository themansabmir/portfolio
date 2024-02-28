import React, { useLayoutEffect, useRef } from "react";
import Hero from "../components/Hero";
import { About } from "../components/About";
import "../style/globals.css";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <div className='bg-black'>
      <div className='  mx-auto'>
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
};
