import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div id="about-Contact">
        <div
          className="min-h-screen flex justify-center items-center"
          style={{ backgroundColor: "#d9d9d9" }}
        >
          <div className="flex flex-col bg-blue-900 text-white justify-center items-center rounded-2xl p-5 md:p-10 max-w-max">
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8">
              Contact
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center max-w-max">
              <div className="text-md md:text-xl lg:text-2xl font-bold self-start flex flex-col gap-5">
                <div>
                  <div className="">
                    Dr. Prameeladevi Chillakuru -
                    <span className="text-yellow-400">9840565944</span>
                  </div>
                </div>
                <div>
                  <div>
                    Mrs. K.Sudha -
                    <span className="text-yellow-400">9551333622</span>
                  </div>
                </div>
                <div>
                  <div>
                    Email -
                    <a
                      href="mailto:icdic@velammalitech.edu.in"
                      className="text-yellow-400"
                      target="_blank"
                    >
                      icdic@velammalitech.edu.in
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    Visit -
                    <a
                      href="www.velammalitech.edu.in"
                      target="_blank"
                      className="text-yellow-400"
                    >
                      www.velammalitech.edu.in
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    Location -
                    <a
                      className="text-yellow-400"
                      target="_blank"
                      href="https://maps.app.goo.gl/Rj4f8mWVn29UB9g49"
                    >
                      https://maps.app.goo.gl/Rj4f8mWVn29UB9g49
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
