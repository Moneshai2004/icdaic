import React from "react";

const Registeration = () => {
  return (
    <>
      <div
        className="min-h-screen flex justify-center items-center"
        style={{ backgroundColor: "#d9d9d9" }}
      >
        <div className="flex flex-col bg-blue-900 text-white justify-center items-center rounded-2xl p-5 md:p-10 w-4/5">
          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8">
            Registration
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full">
            <div className="text-lg md:text-xl lg:text-2xl font-bold self-start flex flex-col gap-5">
              <div>
                <div className="text-yellow-400">Registration</div>
                <div>
                  UG Students - <span className="text-yellow-400">₹500/-</span>
                </div>
              </div>
              <div>
                <div>PG Students & Research</div>
                <div>
                  Scholars / Academicians -
                  <span className="text-yellow-400">₹1000/-</span>
                </div>
              </div>
              <div>
                <div>
                  Industrialist -
                  <span className="text-yellow-400">₹1500/-</span>
                </div>
              </div>
              <div>
                <div>
                  Register here -
                  <a
                    className="text-yellow-400"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdbcCeaecCsXJHQmNI0DCjDm9Iy4NojdpdfsJOtx-02-yJHlA/viewform"
                  >
                    https://forms.gle/dqVcdcFPZum14p3RA
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 lg:mt-0">
              <img src="/Gpay.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registeration;
