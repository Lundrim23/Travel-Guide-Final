import React, { useEffect, useState } from "react";
import ReviewForm from '../components/ReviewForm'
import ReviewTable from '../components/ReviewTable';
import {
  addReview,
  deleteReview,
  getReview,
  updateReview,} from "../utils/fetch";

const ReviewComponent = () => {
  const [input, setInput] = useState({
    reviewName: "",
    reviewDescription: "",
    reviewRating: ""
  
  });

 // displays reviews on the table
 const [reviews, setReviews] = useState([]);

 useEffect(() => {
   const fetchReviews = async () => {
     try {
       //this method gets data from db and populates state with data
       getReview().then(function (response) {
         setReviews(response.data);
       });
     } catch (err) {
       if (err.response) {
         //not in the 200 respose range
         console.log(err.response.data);
         console.log(err.response.status);
         console.log(err.response.headers);
       } else {
         console.log(`Error: ${err.message}`);
       }
     }
   };
   fetchReviews();
 }, []);

 //populates state with data
 function handleChange(reviews) {
   const { name, value } = reviews.target;

   setInput((prevInput) => {
     return {
       ...prevInput,
       [name]: value,
     };
   });
 }

 // saves data to db throught be
 const handleSubmit = async (reviews, id) => {
    reviews.preventDefault();

    const newReview = {
      reviewName: input.reviewName,
      reviewDescription: input.reviewDescription,
      reviewRating: input.reviewRating
   
    };

    try {
      addReview(newReview).then((response) => {
        setReviews([...reviews, response.data]);
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  //updates reviews
  const updateReview = async (id) => {
    const updateReview = {
        reviewName: input.reviewName,
        reviewDescription: input.reviewDescription,
        reviewRating: input.reviewRating
    };

    try {
      updateReview(id, updateReview ).then((response) => {
        setReviews(
          reviews.map((reviews) =>
            reviews.id === id ? { ...response.data } : reviews
          )
        );
      });
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

   // deleting
   const deleteReview =  (id) => {
    try {
      deleteReview(id);
      const myalldata = reviews.filter((item) => item._id !== id);
      setReviews(myalldata);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };


  return (
    <div>
    <ReviewTable reviews={reviews} 
    update={updateReview} 
    deleteReview={deleteReview} />
<ReviewForm
     handleChange={handleChange}
     handleSubmit={handleSubmit}
     input={input} 
    />
    </div>
  )
  }

export default ReviewComponent;