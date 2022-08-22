import React from "react";

import { Link } from "react-router-dom";
import Card from "../components/Card";
import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import RegisterDivider from "../components/RegisterDivider";
import CardTitle from "./CardTitle";

function Home() {
  return (
    <>
      <div>
        <Hero />
        <CardTitle />

        {/*  */}

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
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

        <LogoSlider />
        <RegisterDivider />
      </div>
    </>
  );
}

export default Home;
