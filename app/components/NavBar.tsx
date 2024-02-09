import React from "react";

const NavBar = () => {
  return (
    <div className="fixed z-10 w-full">
      <div className="flex justify-evenly text-white pt-10">
        <div className="font-bold text-4xl">
          <a href="/">ICDAIC&lsquo;24</a>
        </div>
        <div className="text-2xl font-serif">
          <a href="/">Register Now</a>
        </div>
        <div className="text-2xl font-serif hidden md:block lg:block xl:block">
          <a href="/">View brochure</a>
        </div>
        <div className="text-2xl font-serif hidden md:block lg:block xl:block">
          <a href="/">About</a>
        </div>
        <div className="text-2xl font-serif hidden md:block lg:block xl:block">
          <a href="/">Schedule</a>
        </div>
        <div className="text-2xl font-serif hidden md:block lg:block xl:block">
          <a href="/">Location</a>
        </div>
        <div className="text-2xl font-serif hidden md:block lg:block xl:block">
          <a href="tel:+1234567890">Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
