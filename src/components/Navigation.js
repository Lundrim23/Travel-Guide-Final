import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/features/loginSlice";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import Spinner from "../components/Spinner";
import io from "socket.io-client";
export const socket = io.connect("http://localhost:5000");
import { NavLink } from "react-router-dom";

axios.defaults.withCredentials = true;
let firstRender = true;

const Navigation = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = localStorage.getItem("user_id");

  const sendLogoutRequest = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/users/logout",
      null,
      {
        withCredentials: true,
      }
    );
    if (res.status == 200) {
      return res;
    }
    return new Error("Unable to logout, please try again");
  };
  const handleLogout = () => {
    sendLogoutRequest()
      .then(() => {
        dispatch(authActions.logout());
        localStorage.setItem("user_id", undefined);
      })
      .then(window.location.reload(false));
  };

  const joinRoom = () => {
    if (userId) {
      socket.emit("join_room", userId);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const refreshToken = async () => {
    try {
      const data = await axios
        .get(`http://localhost:5000/api/users/refresh`, {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data.user);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const sendRequest = async () => {
    try {
      const data = await axios
        .get(`http://localhost:5000/api/users/user`, {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data.user);
          setLoading(true);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
    }
    sendRequest();
    let interval = setInterval(() => {
      refreshToken();
    }, 1000 * 29);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {loading ? <Spinner /> : <Spinner />}
      <nav className="bg-[#051622] h-15" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://technext.github.io/trips/images/logo.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-7">
                <NavLink
                    to="/"
  
                    className={({ isActive }) =>
                      isActive ? 'bg-gray-600 ring-1 ring-gray-400 text-white hover:bg-gray-700 font-bold px-3 py-2 rounded-md text-sm font-medium' : 'bg-[#051622] text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    }
                    
                  >
                    {/* <button className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"></button> */}

                    Home
                  </NavLink>

                  <NavLink
                    to="/places"
                    className={({ isActive }) =>
                    isActive ? 'bg-gray-600 ring-1 ring-gray-400 text-white hover:bg-gray-700 font-bold px-3 py-2 rounded-md text-sm font-medium' : 'bg-[#051622] text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  }
                  
                  >
                    Places
                  </NavLink>

                  <NavLink
                    to="/events"
                    className={({ isActive }) =>
                    isActive ? 'bg-gray-600 ring-1 ring-gray-400 text-white hover:bg-gray-700 font-bold px-3 py-2 rounded-md text-sm font-medium' : 'bg-[#051622] text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  }
                  
                  >
                    Events
                  </NavLink>

                  <NavLink
                    to="/api"
                    className={({ isActive }) =>
                      isActive ? 'bg-gray-600 ring-1 ring-gray-400 text-white hover:bg-gray-700 font-bold px-3 py-2 rounded-md text-sm font-medium' : 'bg-[#051622] text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    }
                    
                  >
                    Near you
                  </NavLink>

                      <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? 'bg-gray-600 ring-1 ring-gray-400 text-white hover:bg-gray-700 font-bold px-3 py-2 rounded-md text-sm font-medium' : 'bg-[#051622] text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    }
                    
                  >
                    About
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                    isActive ? 'bg-gray-600 ring-1 ring-gray-400 text-white hover:bg-gray-700 font-bold px-3 py-2 rounded-md text-sm font-medium' : 'bg-[#051622] text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  }
                  
                  >
                    Contact
                  </NavLink>
                  <div className="px-20 mr-40 text-[#051622]"> TestTestTestTestt</div>
                  {!isLoggedIn && (
                    <Link
                      to="/register"
                      className="text-slate-100 bg-[#0A2C43] ring-1 ring-gray-400 hover:bg-[#104061] hover:text-white px-6 py-2 
                      rounded-md text-sm font-medium mr-10 "
                    >
                      Register
                    </Link>
                  )}
                  {!isLoggedIn && (
                    <Link
                      to="/login"
                      className="text-slate-100 bg-[#0A2C43]  ring-1 ring-gray-400 hover:bg-[#104061] hover:text-white px-6 py-2 rounded-md text-sm font-medium"
                    >
                     Login
                    </Link>
                  )}
                  {isLoggedIn && (
                    <Link
                      to="/users/"
                      className="text-slate-100 bg-[#0A2C43] ring-1 ring-gray-400 hover:bg-[#104061] hover:text-white px-6 py-2 
                      rounded-md text-sm font-medium mr-10"
                    >
                      {user &&
                        user.username.charAt(0).toUpperCase() +
                          user.username.slice(1)}
                    </Link>
                  )}
                  {isLoggedIn && (
                    <Link
                      to="/"
                      onClick={handleLogout}
                      className="text-slate-100 bg-[#0A2C43] ring-1 ring-gray-400 hover:bg-[#104061] hover:text-white px-6 py-2 
                      rounded-md text-sm font-medium mr-10"
                    >
                      Chat
                    </Link>
                  )}
                  {isLoggedIn && (
                    <Link
                      to="/chat"
                      onClick={joinRoom}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Chat
                    </Link>
                  )}
                </div>
              </div>

              {/*  */}
              <ToastContainer autoClose={2000} hideProgressBar={true} />
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* <div className="flex items-center bg-gray-800">
              <form method="GET">
                <div className="relative text-gray-600 focus-within:text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="q"
                    className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                    placeholder="Search..."
                    autoComplete="off"
                  ></input>
                </div>
              </form>
            </div> */}
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>

                <Link
                  to="/places"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Places
                </Link>

                <Link
                  to="/events"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Events
                </Link>

                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
                {!isLoggedIn && (
                <Link
                  to="/register"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Register
                </Link>
)}
                {!isLoggedIn && (
                <Link
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
                )} 
                { isLoggedIn && (
                <Link
                  to="/users/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {user &&
                    user.username.charAt(0).toUpperCase() +
                      user.username.slice(1)}
                </Link>
                )}
                {isLoggedIn && (
                  <Link
                    to="/"
                    onClick={handleLogout}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white  block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Logout
                  </Link>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* 
       <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>  */}
    </div>
  );
};

export default Navigation;
