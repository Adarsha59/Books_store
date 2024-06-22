import React from "react";
import HeroBanner from "./HeroBanner";
import FreeCard from "./FreeCard";

function Home() {
  return (
    <>
      <div className=" dark:bg-white dark:text-black">
        <HeroBanner />
        <FreeCard />
      </div>
    </>
  );
}

export default Home;
