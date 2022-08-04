import { AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          {/* Sign In Section */}
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-blue-900">Travel </span>Guide
            </div>

            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">
                Create new account
              </h2>
              <div className="border-2 w-10 border-blue-900 inline-block mb-2"></div>

              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-2xl">
                  <AiOutlineUser className="text-gray-400 m-2" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-2xl">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-2xl">
                  <AiOutlinePhone className="text-gray-400 m-2" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
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

                <div className="flex justify-between w-64 mb-5 pt-3 rounded-2xl">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />{" "}
                    Remember me
                  </label>
                </div>

                <a
                  href="#"
                  className="border-2 border-blue-900 text-blue-900 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white"
                >
                  Register
                </a>
              </div>
            </div>
          </div>

          {/* Sign Up Section */}
          <div className="w-2/5 bg-blue-900 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 ">
            <h2 className="text-3xl font-bold mb-3">Dear, User!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up your account details and continue the journey with us.
            </p>
            <Link
              to="/login"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-900"
            >
              Log In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
