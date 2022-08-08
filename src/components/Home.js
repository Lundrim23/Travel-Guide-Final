import React from "react";

import { Link } from "react-router-dom";
import Card from "../components/Card";
import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import RegisterDivider from "../components/RegisterDivider";

function Home() {
  return (
    <>
    <div>
      <Hero />
      <div class="mt-40">
        <div class="title m">
          <h2 class="text-center text-4xl font-bold text-gray-800 mb-4">Places to visit</h2>
            
            <p class=" text-center text-2xl font-light text-gray-400">
                All article are verified by 2 experts and valdiate by the CTO
            </p>
        </div>
        </div>
      <div class="text-center mx-4 " >
<div class="w-full bg-white p-12 mb-50">
 
        </div>
        {/*  */}
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
            
          <Card countryName="Kosova" contentName="Work at home, remote, is the new age of the job, every  person can work at home...." userName="Elantra Jashari" dateName="20 mars 2029 - 6 min read"/>
          <Card countryName="Albania" contentName="Work at home, remote, is the new age of the job, every  person can work at home...." userName="Elantra Jashari" dateName="20 mars 2029 - 6 min read"/>
          <Card countryName="Macedonia" contentName="Work at home, remote, is the new age of the job, every  person can work at home...." userName="Elantra Jashari" dateName="20 mars 2029 - 6 min read"/>
          <Card countryName="Montenegro" contentName="Work at home, remote, is the new age of the job, every  person can work at home...." userName="Elantra Jashari" dateName="20 mars 2029 - 6 min read"/>

        
        </div>
    </div>
      <LogoSlider />
      <RegisterDivider />

    
    

 
    </div>
    </>
    
 
  );
}

export default Home;
