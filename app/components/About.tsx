import React from "react";
import Date from "./Dates";

const About = () => {
  return (
    <>
      <div
        className="h-screen flex justify-center items-center"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div
          className="flex flex-col justify-center items-center rounded-2xl max-w-max "
          style={{ backgroundColor: "#9da4e1", height: "80vh", width: "70vw" }}
        >
          <div className="pt-4 pb-2 text-3xl md:text-3xl lg:text-6xl">
            About
          </div>
          <div className="text-md xl:mr-96 xl:text-3xl text-justify space-y-4 md:text-xl lg:text-xl p-4">
            <div className="xl:pr-14">
              ICDAIC&lsquo;24 is a national level technical conference that is
              to be held on April 06 2024. The event focuses on gathering the
              various project ideas of people about data analytics and
              intelligence computing in both online and offline mode.
            </div>
            <div className="xl:pr-14">
              The event is a coordinated event that is to be held on both online
              as well as offline mode. We welcome participants from all over
              India. The participants can present their project ideas through
              either offline mode or offline mode based on their convenience.
            </div>
          </div>
        </div>
        <div
          className="hidden xl:flex text-4xl font-serif bg-blue-900 text-white flex-col justify-center space-y-8 absolute right-56 rounded-xl z-10"
          style={{ height: "50vh", width: "25vw" }}
        >
          <div className="flex justify-center">ICDAIC&lsquo;24</div>
          <div className="bg-yellow-400 h-1.5 w-72 self-center"></div>
          <div className="text-wrap pl-8 pr-8">
            International Conference on Data Analytics And Intelligence
            Computing
          </div>
        </div>
      </div>
      <Date />
    </>
  );
};

export default About;
