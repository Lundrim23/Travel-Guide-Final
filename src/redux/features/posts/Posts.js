import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './postsSlice'
import {FaThumbsUp, FaThumbsDown, FaHeart } from "react-icons/fa";
import { like, unlike } from '../../../utils/fetch';

const Posts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts({}))
    }, [dispatch])

    const posts = useSelector((state) => state.posts.list)

        //console.log("This is use selector ",useSelector((state) => state.posts.list))

    //this method likes an event later will change in redux
    const likeEvent = async (id) => {
      try {
        // like(id).then((response) => {
        //   setEvents([...events, response.data]);
        // });
        like(id).then((res) => {
          console.log(res);
        });
      } catch (error) {
        console.log(error);
      }
    };

      //this method unlikes an event
  const unlikeEvenet = (id) => {
    try {
      unlike(id);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {posts.map((post) => {
        return (
          <div>
      <div className="mx-auto flex w-96 flex-col bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-10 mr-10 mt-20">
        <img
          className="aspect-video w-96 rounded-t-2xl object-cover object-center"
          src={post.imageUrl}
          alt="alt"
        />
        <div className="p-4">
          <small className="text-pink-500 text-xs">{post.address}</small>
          <h1 className="text-2xl font-medium text-slate-600 pb-2">
            {post.eventName}
          </h1>

          <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
            {post.description}
          </p>

          {/* icons */}
           <div className="pt-6 flex flex-wrap ml- ">
           <FaHeart color="#f43f5e" class ="mr-2" icon="FaHeart"/>
           <p className="text-gray-400 text-sm">
           : {post.likes.length}
           </p>
          <button onClick={() => likeEvent(post._id)} className=" ml-52 hover:bg-slate-100  hover:ring hover:ring-rose-400 hover:p-1" >
          <FaThumbsUp color="#f43f5e" icon="fa-solid FaThumbsUp" className=""  />
          </button> 
          <button onClick={() => unlikeEvenet(post._id)} className="ml-3 hover:bg-slate-100 hover:ring hover:ring-violet-300 hover:p-1">
          <FaThumbsDown color="#818cf8"icon="FaThumbsDown" className=""/>
          </button>
          
          <div className="flex flex-wrap ">
         
           </div>
          </div>
        </div>
      </div>
    </div>
        )
      })}
    </>
  )
}

export default Posts
