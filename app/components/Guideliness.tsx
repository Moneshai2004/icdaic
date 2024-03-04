import React from 'react'
import Date from './Dates';

const Guideliness = () => {
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
            Guidelines
          </div>
          <div className="text-lg xl:text-3xl space-y-4 md:text-xl lg:text-xl p-4 m-8">
            <div className="">
              After checking the plagiarism using Turnitin plagiarism software,
              it should be below 10%. We will publish the papers with the IGI
              Global Partnership (scopus indexed). We have planned three book
              chapters for our conference. We are expecting 100 papers for our
              conference. On acceptance of your paper, you have to pay an extra
              amount of Rs. 5,000 for publication, and the paper will be indexed
              within 6 months
            </div>
          </div>
        </div>
      </div>
      <Date/>
    </>
  );
}

export default Guideliness