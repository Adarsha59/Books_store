import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="min-h-screen px-4 md:px-8  dark:bg-white dark:text-black  mt-[10.2rem]  ">
      <div className=" dark:bg-white dark:text-black p-6">
        <div className="max-w-7xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-lg dark:bg-white dark:text-black text-center mb-12">
            Welcome to our company! We are dedicated to providing the best
            services in the industry.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0">
            <div className=" dark:bg-white dark:text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold dark:bg-white dark:text-black mb-4">
                Our Mission
              </h2>
              <p className=" dark:bg-white dark:text-black">
                Our mission is to deliver high-quality products that bring value
                to our customers.
              </p>
            </div>
            <div className="  dark:bg-white dark:text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="  dark:bg-white dark:text-black">
                We envision a world where our solutions make life easier for
                everyone.
              </p>
            </div>
            <div className="  dark:bg-white dark:text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Values
              </h2>
              <p className="  dark:bg-white dark:text-black">
                Integrity, innovation, and customer satisfaction are at the core
                of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
