import React from "react";
import EventHero from "../components/EventHero";
import EventSection from "../components/EventSection";
import EventCard from "../components/EventCard";
import EventTitle from "../components/EventTitle";
import EventFilms from "../components/EventFilms";

function Events() {
  return (
   
    <div>
    <EventHero />
    <div class="bg-slate-50">
    <EventTitle />
    </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  bg-gradient-to-b from-slate-50 to-gray-300 pt-10 ">
      <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
        <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
        <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
    </div>


    <div class="h-40 bg-gray-300">
      </div>



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
      <div class="h-20 bg-slate-50">
      </div>


     
<EventFilms />

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  bg-slate-50 ">
      <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
        <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
        <EventCard EventPlace="Prishtine,Kosove" EventName="SunnyHill" EventText="hwhfowfcohofcowfhcow" />
    </div>


    </div>
  );
}

export default Events;
