import ServicesComponent from "./ServicesComponent";

import { FaHotel } from "react-icons/fa";
import { GiKnifeFork, GiMountainClimbing } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import { GoGlobe } from "react-icons/go";
import { MdOutlineAirplanemodeActive } from "react-icons/md";

const Services = () => {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">Services</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui
          id ornare arcu odio ut sem nulla pharetra diams sit los fer uos andes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">                                                          
            <ServicesComponent icon={props => <FaHotel/>} title="Affordable Hotels" 
            paragraph="Maecenas accumsan lacus vel facilisis as dev kont 
            pas le tu ialfo ke peru ase i volutpat est velit egestas dui 
            id ornare arcu odio ut sem."/>

            <ServicesComponent icon={props => <GiKnifeFork/>} title="Food and Drinks" 
            paragraph="Maecenas accumsan lacus vel facilisis as dev kont 
            pas le tu ialfo ke peru ase i volutpat est velit egestas dui 
            id ornare arcu odio ut sem."/>

            <ServicesComponent icon={props => <HiSpeakerphone/>} title="Safty Guide" 
            paragraph="Maecenas accumsan lacus vel facilisis as dev kont 
            pas le tu ialfo ke peru ase i volutpat est velit egestas dui 
            id ornare arcu odio ut sem."/>    

            <ServicesComponent icon={props => <GoGlobe/>} title="Around the World" 
            paragraph="Maecenas accumsan lacus vel facilisis as dev kont 
            pas le tu ialfo ke peru ase i volutpat est velit egestas dui 
            id ornare arcu odio ut sem."/>

            <ServicesComponent icon={props => <MdOutlineAirplanemodeActive/>} title="Travel Informations" 
            paragraph="Maecenas accumsan lacus vel facilisis as dev kont 
            pas le tu ialfo ke peru ase i volutpat est velit egestas dui 
            id ornare arcu odio ut sem."/>

            <ServicesComponent icon={props => <GiMountainClimbing/>} title="Adventures" 
            paragraph="Maecenas accumsan lacus vel facilisis as dev kont 
            pas le tu ialfo ke peru ase i volutpat est velit egestas dui 
            id ornare arcu odio ut sem."/>                                       
        </div>
      </div>
    </div>
  );
}

export default Services