import React, { useEffect, useState } from "react";
// import List from "../../public/List.json";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
function FreeCard() {
  const [List, setList] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/books");
        const FilterData = response.data.filter(
          (Data) => Data.category === "free"
        );
        setList(FilterData);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);
  // const FilterData = List.filter((Data) => Data.category === "free");

  // console.log(FilterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="px-4 md:px-16 my-10  dark:bg-white dark:text-black">
        <div>
          <h1 className="text-2xl font-bold">Free Offered Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            cupiditate dolores maxime iusto. Eligendi, inventore repudiandae
            error, ipsum necessitatibus dolores explicabo accusamus veritatis
            ratione provident quia voluptates, odit distinctio aliquid.
          </p>
        </div>
      </div>
      <div className="px-8 md:px-16 my-10  dark:bg-white dark:text-black">
        <div className="slider-container  ">
          <Slider {...settings}>
            {List.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeCard;
