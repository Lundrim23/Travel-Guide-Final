import React from "react";
import AboutHero from "../assets/img/about-hero.png";
import contacts from "../Data/contacts";
import TeamCard from "../components/TeamCard";
import LogoSlider from "../components/LogoSlider"

function createCard(contact) {
  return (
    <TeamCard
      key={contact.id}
      img={contact.image}
      name={contact.name}
      email={contact.email}
      title={contact.title}
    />
  );
}

function About() {
  return (
    <>
      <div className="bg-black bg-opacity-40 relative">
        <img
          src={AboutHero}
          className="hero-img w-full h-full object-cover absolute mix-blend-multiply"
          alt="hero"
        ></img>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl s pb-24 pt-24 m-0 text-white font-medium text-center relative">
          Media Center
        </h1>
      </div>
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-around">
        <div className="border border-2 border-gray-400 p-5 leading-8 h-full sm:sticky top-10  ">
          <p className=" text-xl font-bold text-gray-800">
            <a href="#1" className="hover:bg-gray-400  hover:text-white hover:p-1 hover:rounded-md hover:font-normal" >
              Who are we ?</a>
          </p>
          <p className=" text-xl font-bold text-gray-800">
            <a href="#2" className="hover:bg-gray-400  hover:text-white hover:p-1 hover:rounded-md hover:font-normal">
              What we offer ?</a>
          </p>
          <p className=" text-xl font-bold text-gray-800">
            <a href="#3"className="hover:bg-gray-400  hover:text-white hover:p-1 hover:rounded-md hover:font-normal">Why should you choose us?</a>
          </p>
          <p className=" text-xl font-bold text-gray-800">
            <a href="#4" className="hover:bg-gray-400  hover:text-white hover:p-1 hover:rounded-md hover:font-normal">Our team</a>
          </p>
        </div>

        <div className="flex-1 p-10 ">
          <section id="1" className="mb-4">
            <h1 className="text-2xl lg:pl-80 md:pl-0 font-bold text-gray-800">Who are we?</h1>
            <p className="lg:pl-72 md:pl-0 text-red-900 font-bold mb-4"> About our history - till now</p>
            <p className="py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident veritatis ut fuga. Hic sunt a, earum obcaecati excepturi
              deserunt nulla saepe, sapiente ab veritatis aperiam! Nisi aperiam
              repellendus veniam delectus quaerat alias dolor sunt suscipit
              dolorem ullam consequuntur optio cupiditate beatae veritatis
              tenetur ipsum totam, reprehenderit obcaecati quia, autem in
              fugiat. Ad sunt aut veniam, ullam rerum, quo exercitationem et
              amet eaque incidunt ducimus error sapiente dolore sed, adipisci
              corrupti vel iure repellat cum in voluptates pariatur aliquid quam
              unde!
            </p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              voluptates quibusdam in a, voluptas, libero veniam officiis
              voluptatem, delectus esse aspernatur? Alias harum labore
              distinctio iusto error illo reiciendis quis. A distinctio
              consequuntur fuga explicabo?Ad sunt aut veniam, ullam rerum, quo exercitationem et
              amet eaque incidunt ducimus error sapiente dolore sed, adipisci
              corrupti vel iure repellat cum in voluptates pariatur aliquid quam
              unde! Architecto nulla, quae tempora odio reiciendis aliquid
              fugiat repellat perferendis natus itaque alias beatae delectus
              reprehenderit necessitatibus at, assumenda dicta.
            </p>

            {/* <p className="py-5"> */}
              {/* <a href="#" className=" underline text-cyan-700 ">
                www.bokun.com
              </a>
              , &nbsp;
              <a href="#" className=" underline text-cyan-700 ">
                www.flipkey.com
              </a>
              , &nbsp;
              <a href="#" className=" underline text-cyan-700 ">
                www.thefork.com
              </a>
              , &nbsp;
              <a href="#" className=" underline text-cyan-700 ">
                www.helloce.com
              </a>
              , &nbsp;
              <a href="#" className=" underline text-cyan-700 ">
                www.travelaa.com
              </a>
              , &nbsp;
              <a href="#" className=" underline text-cyan-700 ">
                www.balkan.com
              </a>
              , &nbsp;
              <a href="#" className=" underline text-cyan-700 ">
                www.nature.com
              </a> */}
            {/* </p> */}
            {/* <p>&nbsp;</p> */}
          </section>

          <section className="py-5 mb-4" id="2">
            <h1 className="text-2xl lg:pl-80 md:pl-0 font-bold text-gray-800">What we offer ?</h1>
            <p className="py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident veritatis ut fuga. Hic sunt a, earum obcaecati excepturi
              deserunt nulla saepe, sapiente ab veritatis aperiam! Nisi aperiam
              repellendus veniam delectus quaerat alias dolor sunt suscipit
              dolorem ullam consequuntur optio cupiditate beatae veritatis
              tenetur ipsum totam, reprehenderit obcaecati quia, autem in
              fugiat. Ad sunt aut veniam, ullam rerum, quo exercitationem et
              amet eaque incidunt ducimus error sapiente dolore sed, adipisci
              corrupti vel iure repellat cum in voluptates pariatur aliquid quam
              unde! Architecto nulla, quae tempora odio reiciendis aliquid
              fugiat repellat perferendis natus itaque alias beatae delectus
              reprehenderit necessitatibus at, assumenda dicta.
            </p>
          </section>

          <section className="py-5" id="3">
            <h1 className="text-2xl lg:pl-64 md:pl-0 font-bold text-gray-800 ">Why should you choose us ?</h1>
            <p className="py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident veritatis ut fuga. Hic sunt a, earum obcaecati excepturi
              deserunt nulla saepe, sapiente ab veritatis aperiam! Nisi aperiam
              repellendus veniam delectus quaerat alias dolor sunt suscipit
              dolorem ullam consequuntur optio cupiditate beatae veritatis
              tenetur ipsum totam, reprehenderit obcaecati quia, autem in
              fugiat. Ad sunt aut veniam, ullam rerum, quo exercitationem et
              amet eaque incidunt ducimus error sapiente dolore sed, adipisci
              corrupti vel iure repellat cum in voluptates pariatur aliquid quam
              unde! Architecto nulla, quae tempora odio reiciendis aliquid
              fugiat repellat perferendis natus itaque alias beatae delectus
              reprehenderit necessitatibus at, assumenda dicta.
            </p>
          </section>

          <section className="max-w-max py-5 mt-10" id="4">
            <h1 className="text-2xl  lg:pl-80 md:pl-0 font-bold text-gray-800">Meet the Team</h1>
            <p className="lg:pl-64 md:pl-0 text-red-900 font-bold mb-10"> Lorem ipsum, dolor sit amet consectetur.</p>
            <div className="flex flex-row justify-between flex-wrap py-5 ">
              {" "}
              {contacts.map(createCard)}
            </div>
          </section>
        </div>

      </div>
      <LogoSlider />
    </>
  );
}

export default About;
