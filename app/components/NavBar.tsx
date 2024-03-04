'use client'
import React from "react";
import Link from "next/link";

const NavBar = () => {
  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSchedule = () => {
    const schedule = document.getElementById("about-schedule");
    if (schedule) {
      schedule.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleBrochure = () => {
    window.open("/Brochure.jpeg", "_blank");
  };

const handleContact = () => {
  const Contact = document.getElementById("about-Contact");
  if (Contact) {
    Contact.scrollIntoView({ behavior:"smooth" });
  }
};
  return (
    <div className="fixed z-10 w-full">
      <div className="flex justify-evenly text-white pt-10">
        <div className="font-bold text-4xl">
          <Link href="/">ICDAIC&lsquo;24</Link>
        </div>
        <div className="text-2xl font-serif">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdbcCeaecCsXJHQmNI0DCjDm9Iy4NojdpdfsJOtx-02-yJHlA/viewform">
            Register Now
          </Link>
        </div>
        <div className="text-2xl font-serif hidden md:block lg:block xl:block">
          <a href="#" onClick={handleBrochure}>
            Brochure
          </a>
        </div>
        <div className="text-2xl font-serif hidden lg:block xl:block">
          <a href="#" onClick={handleAboutClick}>
            About
          </a>
        </div>
        <div className="text-2xl font-serif hidden lg:block xl:block">
          <Link href="#" onClick={handleSchedule}>
            Schedule
          </Link>
        </div>
        <div className="text-2xl font-serif hidden md:block lg:block xl:block">
          <Link href="https://maps.app.goo.gl/Rj4f8mWVn29UB9g49">Location</Link>
        </div>
        <div className="text-2xl font-serif hidden md:block lg:block xl:block">
          <Link href="#" onClick={handleContact}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
