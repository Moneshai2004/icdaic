import React from "react";
import Registeration from "./Registeration";

const Patrons2 = () => {
  return (
    <>
      <div
        className="min-h-screen flex justify-center items-center"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div className="flex flex-col bg-blue-900 text-white justify-center items-center rounded-2xl md:p-5 xl:p-10 lg:p-10 max-w-max">
          <div className="text-3xl md:text-4xl font-bold pt-4">PATRONS</div>
          <div className="text-xl md:text-2xl font-bold ml-4 md:ml-20 self-start flex flex-col gap-5">
            <div>
              <div>Convenor</div>
              <div className="text-yellow-400">Dr. S. PadmaPriya,</div>
              <div>
                Professor and Head, Department of Artificial Intelligence and
                Data Science.
              </div>
            </div>
            <div>
              <div>Coordinators</div>
              <div className="text-yellow-400">Dr. Prameelaevi Chillakuru,</div>
              <div>
                Associate Professor, Department of Artificial Intelligence and
                Data Science.
              </div>
            </div>
            <div>
              <div className="text-yellow-400">Mrs. M. Hemalatha,</div>
              <div>
                Assistant Professor, Department of Artificial Intelligence and
                Data Science.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Registeration />
    </>
  );
};

export default Patrons2;
