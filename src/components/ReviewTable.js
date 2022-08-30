import React from 'react'

const ReviewTable = (props) => {
  return (
    <div>
         <div class="bg-gray-300 min-h-full pt-20 pb-20">
      <div class=" bg-slate-50 rounded-md px-10 py-10 max-w-7xl mx-auto">
      <h1 class="text-left text-2xl font-bold text-gray-400 ">REVIEWS AND RATINGS</h1>
      <label for="Rating" class="block mb-2 text-lg font-bold text-gray-700">Feel free to review your experience on the 
      form below </label>
      <table>
      <tbody class="flex-1 sm:flex-none">
        {props.reviews.map((reviews) => (
          <>
            <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                {reviews._id}
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                {reviews.reviewName}
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                {reviews.reviewDescription}
              </td>
              <td class="border-grey-light border hover:bg-gray-100 p-3">
                {reviews.reviewRating}
              </td>
            
           
              {/* <td class="border-grey-light border hover:bg-gray-100 p-3"> */}
                {/* <button onClick={() => props.update(reviews._id)}>Update</button> */}
              {/* </td> */}
              <td class="border-grey-light border hover:bg-gray-200 p-3">
                <button onClick={() => props.deleteReview(reviews._id)}>Delete</button>
              </td>
            </tr>
          </>
        ))}
      </tbody>
      
      </table>

      </div>  
        </div> 
    </div>
  )
}

export default ReviewTable;