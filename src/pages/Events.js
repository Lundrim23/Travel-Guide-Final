import React from "react";
import EventHero from "../components/EventHero";
import EventSection from "../components/EventSection";
import EventCard from "../components/EventCard";
import EventTitle from "../components/EventTitle";

function Events() {
  return (
    // <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <div>
      <EventSection />

      <div class="bg-gray-300 pt-20">
        <EventTitle />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  bg-gradient-to-b from-gray-300 to-slate-50">
        <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
        <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
        <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
        <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
        <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
        <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />

      </div>
      <div class="h-60 bg-slate-50">
      </div>
      <EventHero />
    </div>


  );
}

export default Events;
