import React from "react";
import Patrons2 from "./Patrons2";

const Patrons = () => {
  return (
    <>
      <div
        className="min-h-screen flex justify-center items-center"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div className="flex flex-col bg-blue-900 text-white justify-center items-center rounded-2xl md:p-5 xl:p-10 lg:p-10 max-w-max">
          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold p-4">
            PATRONS
          </div>
          <div className="text-lg md:text-xl lg:text-2xl font-bold ml-4 md:ml-20 self-start flex flex-col gap-5">
            <div>
              <div>Chief Patron</div>
              <div className="text-yellow-400">Shri. M.V. Muthuramalingam,</div>
              <div>Chairman, Velammal Institute of Technology</div>
            </div>
            <div>
              <div>Patron</div>
              <div className="text-yellow-400">Shri. M. V. M. Sasikumar,</div>
              <div>Director, Velammal Education Trust</div>
            </div>
            <div>
              <div>Co-Patrons</div>
              <div className="text-yellow-400">Shri. K. Razak,</div>
              <div>Advisor, Velammal Institute of Technology</div>
            </div>
            <div>
              <div className="text-yellow-400">Shri. M. Vaasu,</div>
              <div>Advisor, Velammal Institute of Technology</div>
            </div>
            <div>
              <div className="text-yellow-400">Dr. N. Balaji,</div>
              <div>Principal, Velammal Institute of Technology</div>
            </div>
            <div>
              <div className="text-yellow-400">Dr. S. Soundararajan,</div>
              <div>Vice Principal, Velammal Institute of Technology</div>
            </div>
          </div>
        </div>
      </div>
      <Patrons2 />
    </>
  );
};

export default Patrons;
