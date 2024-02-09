import React from "react";
import NavBar from "./NavBar";
import About from "./About";

export const Landing = () => {
  return (
    <>
      <div className="h-screen bg-cover w-full bg-[url('/Landing.jpg')]">
        <div className="flex flex-col justify-center items-center text-white h-screen">
          <div className="font-extrabold text-6xl md:text-8xl font-serif">
            ICDAIC&lsquo;24
          </div>
          <div className="text-2xl md:text-3xl font-serif text-center">
            International Level Conference
          </div>
          <div className="flex space-x-10 md:flex-row md:space-x-32 lg:space-x-36 pt-12 text-lg md:text-3xl font-serif">
            <div className="text-yellow-400">
              <a href="/">Register now</a>
            </div>
            <div>
              <a href="/">View Details</a>
            </div>
          </div>
        </div>
        <About />
      </div>
    </>
  );
};

export default Landing;
