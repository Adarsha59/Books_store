import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
function Buy() {
  return (
    <div className="min-h-screen px-4 md:px-8  dark:bg-white dark:text-black  mt-[10.2rem]  ">
      <div className=" dark:bg-white dark:text-black p-6">
        <div className="max-w-7xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-centerdark:bg-white dark:text-black mb-6">
            {" "}
            DO SIGNUP FISRT{" "}
          </h1>
          <div className="mx-3">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Signup
              <Signup />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Buy;
