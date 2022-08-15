import React from 'react'

const PlacesCards = () => {
  return (
    <div>
         <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/5 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Albania</p>
          <p className="px-2">lifhiwehfiofolfole</p>
          <a
            href=""
            className="bg-transparent hover:bg-[#6366F1] text-white font-bold hover:text-white py-2 
            px-4 border border-white mx-2 rounded absolute bottom-4 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://albaniamyway.com/wp-content/uploads/2020/08/ksamil-beach-saranda-albania.jpg"
          alt=""
        />
      </div>
    </div>
  )
}

export default PlacesCards