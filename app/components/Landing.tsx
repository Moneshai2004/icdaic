import React from "react";
import NavBar from "./NavBar";
import About from "./About";

export const Landing = () => {
  return (
    <>
      <div className="h-screen bg-cover w-full bg-[url('/Landing.jpg')] overflow-x-hidden">
        <div className="flex flex-col justify-center items-center text-white h-screen gap-10">
          <div className="font-extrabold text-6xl md:text-8xl font-serif">
            ICDAIC&lsquo;24
          </div>
          <div className="text-2xl font-bold md:text-3xl font-serif text-center">
            International Level Conference
          </div>
          <div className="flex space-x-10 md:flex-row md:space-x-32 lg:space-x-36 pt-12 text-2xl font-extrabold md:text-3xl lg:text-6xl font-serif">
            <div className="text-yellow-400 animate-pulse">
              <a href="/">Register now</a>
            </div>
            <div>
              <a href="/">View Details</a>
            </div>
          </div>
          <div
            style={{ whiteSpace: "nowrap" }}
            className="animate-text text-yellow-400 text-xl font-bold w-full"
          >
            <a href="" target="_blank">
              For Scopus/SCI indexed Click Here
            </a>
          </div>
        </div>
        <About />
      </div>
      <style>
        {`
          @keyframes moveRightToLeft {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
          
          .animate-text {
            animation: moveRightToLeft 15s linear infinite; 
          }
        `}
      </style>
    </>
  );
};

export default Landing;
