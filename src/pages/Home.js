import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 flex flex-row gap-2 my-10">
          <h1>Home</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
