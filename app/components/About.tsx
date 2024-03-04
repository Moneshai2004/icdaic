import React from "react";
import Date from "./Dates";
import Link from "next/link";
import Guideliness from "./Guideliness";

const About = () => {
  return (
    <>
      <div
        id="about-section"
        className="h-screen flex justify-center items-center"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div
          className="flex flex-col justify-center items-center rounded-2xl max-w-max md:w-4/5 xl:w-3/5"
          style={{ backgroundColor: "#9da4e1" }}
        >
          <div className="pt-4 pb-2 text-3xl md:text-3xl lg:text-6xl">
            About
          </div>
          <div className="text-lg xl:text-3xl space-y-4 md:text-xl lg:text-xl p-4 m-8">
            <div className="">
              ICDAIC&lsquo;24 is a national level technical conference that is
              to be held on April 06 2024. The event focuses on gathering the
              various project ideas of people about data analytics and
              intelligence computing in both online and offline mode.
            </div>
            <div className="">
              The event is a coordinated event that is to be held on both online
              as well as offline mode. We welcome participants from all over
              India. The participants can present their project ideas through
              either offline mode or offline mode based on their convenience.
            </div>
          </div>
        </div>
      </div>
      <Guideliness />
    </>
  );
};

export default About;
