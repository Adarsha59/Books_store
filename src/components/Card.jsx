import React from "react";

function Card({ item }) {
  console.log(item);
  return (
    <>
      <div className=" md:px-16  dark:bg-white dark:text-black  ">
        <div className="card w-96   shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">$ {item.price}</div>
              <div className="badge badge-outline">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
