import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export function LogIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex lg:w-1/3 md:w-2/3 sm:w-full">
          {/* Sign In Section */}
          <div className="w-full p-5">
            <div className="text-center font-bold">
              <span className="text-blue-900">Travel </span>Guide
            </div>

            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-blue-900 inline-block mb-2"></div>
              <p className="text-gray-400 my-3">to use all of our features.</p>

              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-2xl">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="flex justify-between w-64 mb-5 pt-5">
                  <Link
                    to="/register"
                    className="flex items-center text-xs cursor-pointer"
                  >
                    Dont't have an account ?
                  </Link>
                  <a href="#" className="text-xs">
                    Forgot Password?
                  </a>
                </div>

                <a
                  href="#"
                  className="border-2 border-blue-900 text-blue-900 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LogIn;
