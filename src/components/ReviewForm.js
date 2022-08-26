import React from 'react'
import Stars from './Stars';



const ReviewForm = (props) => {

  return (
    <div>  
       
          {/*  */}
<form>
  <div class="bg-gradient-to-b from-gray-300 to-indigo-50 min-h-screen md:px-20 pt-6">
    <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
      <h1 class="text-center text-2xl font-bold text-gray-400 mb-10">ADD YOUR REVIEW</h1>
      <div class="space-y-4">
        <div>
        <label for="Rating" class="block mb-2 text-lg font-bold text-gray-700">Rate your experince in this place:</label>
     <Stars />
        </div>
        <div>
          <label for="description" class="block mb-2 text-lg font-bold text-gray-700">Description:</label>
          <textarea  cols="30" rows="10" placeholder="Write your review..." class="w-full font-serif  p-4 text-gray-600 bg-gray-100 outline-none rounded-md"
         onChange={props.handleChange}
         name="reviewDescription"
         value={props.input.reviewDescription}
         required
         ></textarea>
        </div>
        
        <div>
          <label for="Name" class="text-lx font-bold text-gray-700">Name:</label>
          <input type="text" placeholder='Name...' class="ml-2 mb-4 outline-none py-1 px-2 text-md border-2 rounded-md" 
        name="reviewName"
        onChange={props.handleChange}
         value={props.input.reviewName} 
         />
        </div>
        <div>
          <label for="Rating" class="text-lx font-bold text-gray-700">Rating:</label>
          <input type="text" placeholder='Rating...' class="ml-2 mb-4 outline-none py-1 px-2 text-md border-2 rounded-md" 
        name="reviewRating"
        onChange={props.handleChange}
         value={props.input.reviewRating} 
         />
        </div>
        <button class=" px-6 py-2 mx-auto block 
        rounded-md text-lg font-semibold text-white bg-indigo-400  "
        type="submit"
        onClick={props.handleSubmit}>ADD REVIEW
        </button>
      </div>
    </div>
  </div>
</form>
  




    </div>
  )
}

export default ReviewForm