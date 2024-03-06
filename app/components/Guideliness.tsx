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
              After checking the plagiarism using Turnitin Plagiarism Software,
              it should be below 15%.On acceptance of your paper, we will
              publish the papers with ISBN Number(978-81-967851-3-0) and the IGI
              Global Partnership (Scopus Indexed). We have planned three book
              chapters for our Conference. We are expecting 100 papers for our
              Conference.You have to pay an extra amount of Rs. 5,000 for
              Publication, and the paper will be indexed within 6 months.
            </div>

            <div className="flex justify-center space-x-4">
              <div>ISBN Number - </div>
              <div className="text-yellow-300"> 978-81-967851-3-0</div>
            </div>
          </div>
        </div>
      </div>
      <Date />
    </>

  );
}

export default Guideliness