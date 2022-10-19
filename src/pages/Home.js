import React from "react";

import Hero from "../components/Hero";
// import LogoSlider from "../components/LogoSlider";
import RegisterDivider from "../components/RegisterDivider";
import CardTitle from "../components/CardTitle";
import Categories from "../components/Categories";
import Services from "../components/Services";
import Homeplaces from "../components/Homeplaces";
import HomePart from "../components/HomePart";

import Food from "../assets/img/food.jpg";
import Cocktails from "../assets/img/cocktails.jpg";
import Beaches from "../assets/img/beaches.jpg";
import Nightlife from "../assets/img/nightlife.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [IdPostit, setIdPostit] = useState();

  const navigate = useNavigate();

  const openprofile = () => {
    navigate("/places/fullposti/", {
      state: {
        idpost: IdPostit,
      },
    });
  };


  return (
    <>
      <div>
        <Hero />

        {/* <LogoSlider /> */}

        <CardTitle
          title="Places to visit"
          subtitle="All article are verified by 2 experts and valdiate by the CTO"
        />

        <Homeplaces openprofile={openprofile} setIdPostit={setIdPostit} />

        <HomePart openprofile={openprofile} setIdPostit={setIdPostit} />

        <RegisterDivider />

        <CardTitle
          title="Events"
          subtitle="All article are verified by 2 experts and valdiate by the CTO"
        />

        <div className="max-w-[1270px] mx-auto p-4 py-12 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
          <Categories
            title="FOOD"
            paragraph="That tastes great"
            buttontxt="Read More"
            button="#"
            image={Food}
            alttxt="food"
          />
          <Categories
            title="COCKTAILS"
            paragraph="Cold cocktails"
            buttontxt="Read More"
            button="#"
            image={Cocktails}
            alttxt="cocktails"
          />
          <Categories
            title="BEACHES"
            paragraph="Clean beaches"
            buttontxt="Read More"
            button="#"
            image={Beaches}
            alttxt="beaches"
          />
          <Categories
            title="NIGHTLIFE"
            paragraph="With some good music"
            buttontxt="Read More"
            button="#"
            image={Nightlife}
            alttxt="nightlife"
          />
        </div>

        <CardTitle
          title="Services"
          subtitle="All article are verified by 2 experts and valdiate by the CTO"
        />

        <Services />
      </div>
    </>
  );
}

export default Home;
