import React from "react";
import Patrons from "./Patrons";

export const Tracks4 = () => {
  return (
    <>
      <div
        className="h-screen flex justify-center items-center"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div
          className="flex flex-col justify-center items-center w-full lg:max-w-max xl:max-w-max md:max-w-max rounded-2xl md:p-5 xl:p-10 lg:p-10"
          style={{ backgroundColor: "#9da4e1" }}
        >
          <div className="text-3xl font-bold">Tracks IV</div>
          <div className="text-sm xl:text-4xl space-y-4 md:text-xl lg:text-3xl p-4">
            <div className="bg-blue-900 p-14 rounded-2xl h-full overflow-auto">
              <div className="text-white flex flex-col gap-10">
                <div className="text-3xl">AI in industry</div>
                <div className="ml-4 md:ml-10 lg:ml-10 xl:ml-10 flex flex-col gap-5">
                  <div>Cognitive process automation</div>
                  <div>Human machine colabaration</div>
                  <div>AI powered digital twins</div>
                  <div>Predictive analysis</div>
                  <div>Smart factories</div>
                  <div>AR and VR technology</div>
                  <div>Gaming technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Patrons />
    </>
  );
};
