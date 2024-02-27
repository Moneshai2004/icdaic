import React from "react";
import Date from "./Dates";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div
        id="about-section"
        className="flex justify-center items-center"
        style={{ backgroundColor: "#d9d9d9", minHeight: "100vh" }}
      >
        <div
          className="flex flex-col justify-center items-center rounded-2xl w-11/12"
          style={{ backgroundColor: "#9da4e1", padding: "20px" }}
        >
          <div className="pt-4 pb-2 text-3xl lg:text-4xl xl:text-5xl">
            About
          </div>
          <div className="text-lg xl:text-xl space-y-4 p-4">
            <div>
              ICDAIC&lsquo;24 is a national level technical conference that is
              to be held on April 06, 2024. The event focuses on gathering the
              various project ideas of people about data analytics and
              intelligence computing in both online and offline mode.
            </div>
            <div>
              The event is a coordinated event that is to be held on both online
              as well as offline mode. We welcome participants from all over
              India. The participants can present their project ideas through
              either online mode or offline mode based on their convenience.
            </div>
            <div>
              <div className="font-bold text-xl lg:text-2xl mb-2">
                Guidelines
              </div>
              <div>
                After checking the plagiarism using Turnitin plagiarism
                software, it should be below 10%. We will publish the papers
                with the IGI Global Partnership (Scopus indexed). We have
                planned three book chapters for our conference. We are expecting
                100 papers for our conference. On acceptance of your paper, you
                have to pay an extra amount of Rs. 5,000 for publication, and
                the paper will be indexed within 6 months.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Date />
    </>
  );
};

export default About;
