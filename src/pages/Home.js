import React from "react";
import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
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

function Home() {
  return (
    <>
      <div>
        <Hero />
        <LogoSlider />
        <CardTitle />

        {/*  */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          <Card
            countryName="Kosova"
            contentName="Work at home, remote, is the new age of the job, every  person can work at home...."
            userName="Elantra Jashari"
            dateName="20 mars 2029 - 6 min read"
          />
          <Card
            countryName="Albania"
            contentName="Work at home, remote, is the new age of the job, every  person can work at home...."
            userName="Elantra Jashari"
            dateName="20 mars 2029 - 6 min read"
          />
          <Card
            countryName="Macedonia"
            contentName="Work at home, remote, is the new age of the job, every  person can work at home...."
            userName="Elantra Jashari"
            dateName="20 mars 2029 - 6 min read"
          />
          <Card
            countryName="Montenegro"
            contentName="Work at home, remote, is the new age of the job, every  person can work at home...."
            userName="Elantra Jashari"
            dateName="20 mars 2029 - 6 min read"
          />
        </div>

        <RegisterDivider />

        <div className="max-w-[1640px] mx-auto p-4 py-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
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

        <Services />
      </div>
    </>
  );
}

export default Home;
