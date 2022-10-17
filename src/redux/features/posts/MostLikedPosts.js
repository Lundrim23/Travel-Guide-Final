import React from "react";
import { useSelector } from "react-redux";
import { FaThumbsUp, FaThumbsDown, FaHeart } from "react-icons/fa";

function MostLikedPosts(props) {
  const likeposts = useSelector((state) => state.posts.beachevents);
  return (
    <>
      {likeposts.slice(0, 3).map((post) => {
        return (
          <div key={post._id}>
            <div
              onMouseEnter={() => props.setIdPostit(post._id)}
              className="mx-auto flex w-96 flex-col bg-white rounded-2xl shadow-xl shadow-slate-300/60 mb-10 mr-10 mt-20"
            >
              <img
                className="aspect-video w-96 rounded-t-2xl object-cover object-center"
                src={post.imageUrl}
                alt="alt"
              />
              <div className="p-4">
                <small className="text-pink-500 text-xs">{post.address}</small>
                <h1
                  onClick={() => props.openprofile()}
                  className="text-2xl font-medium text-slate-600 pb-2 cursor-pointer"
                >
                  {post.eventName}
                </h1>

                <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                  {post.description.substring(0, 120) + "..."}
                </p>
                {/* icons */}
                <div className="pt-6 flex flex-wrap ml- ">
                  <FaHeart color="#f43f5e" class="mr-2" icon="FaHeart" />
                  <p className="text-gray-400 text-sm">: {post.likes.length}</p>
                  <button
                    onClick={() => props.likeEvent(post._id)}
                    className=" ml-52 hover:bg-slate-100  hover:ring hover:ring-rose-400 hover:p-1"
                  >
                    <FaThumbsUp
                      color="#f43f5e"
                      icon="fa-solid FaThumbsUp"
                      className=""
                    />
                  </button>
                  <button
                    onClick={() => props.unlikeEvenet(post._id)}
                    className="ml-3 hover:bg-slate-100 hover:ring hover:ring-violet-300 hover:p-1"
                  >
                    <FaThumbsDown
                      color="#818cf8"
                      icon="FaThumbsDown"
                      className=""
                    />
                  </button>
                  <div className="flex flex-wrap "></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MostLikedPosts;
