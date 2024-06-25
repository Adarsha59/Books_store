import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
// import List from "../../public/List.json";
import Card from "./Card";
import { useAuth } from "../context/Auth";
import toast from "react-hot-toast";
import Signup from "./Signup";
import Buy from "./Buy";
function Course() {
  const [isAuthenticated, setIsAuthenticated] = useAuth();
  const [List, setList] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/books");
        console.log("hello this is hai ta", response);
        setList(response.data);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <div className="min-h-screen px-4 md:px-8  dark:bg-white dark:text-black  mt-[10.2rem]  ">
          <div className=" space-y-5 items-center justify-center text-center">
            <h1 className="text-4xl font-bold  ">
              We'r delighted to have you
              <span className="text-pink-500"> here ! :)</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              eius. Vitae minima expedita nobis voluptatibus voluptas autem
              assumenda pariatur
            </p>

            <Link to="/signup">
              <button className=" bg-pink-300 px-4 py-4 rounded-md text-[18px] hover:bg-pink-700 duration-150 font-bold  ">
                Back
              </button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {List.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <Buy />
        </>
      )}
    </>
  );
}

export default Course;
