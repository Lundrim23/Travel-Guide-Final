import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as UserService from "../utils/services/users.service";
import { authActions } from "../redux/features/loginSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Login Successful");
  };

  const history = useNavigate();

  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),

      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol")
        .required("This field is Required"),
    }),
    onSubmit: async (values, actions) => {
      await UserService.login({
        email: values.email,
        password: values.password,
      })
        .then((res) => {
          localStorage.setItem("user_id", res.data.user._id);
          notify();
          dispatch(authActions.login()).then(history("/"));
        })
        .catch((error) => {
          if (error.response) {
            setError(error.message);

            throw Error("User doesnt exist, please check your credentials");
          }
        });
    },
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex lg:w-1/3 md:w-2/3 sm:w-full">
          {/* Sign In Section */}
          <div className="w-full p-5">
            <div className="text-center font-bold">
              {error && (
                <div
                  style={{
                    padding: "3px",
                    backgroundColor: "red",
                    borderRadius: "10px",
                  }}
                >
                  {error}
                </div>
              )}
              <span className="text-blue-900">Travel </span>Guide
            </div>

            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-blue-900 inline-block mb-2"></div>
              <p className="text-gray-400 my-3">to use all of our features.</p>

              <form
                onSubmit={formik.handleSubmit}
                autoComplete="off"
                className="flex flex-col items-center"
              >
                <div
                  className={
                    formik.touched.email && formik.errors.email
                      ? "bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-2xl border-2 border-rose-300"
                      : "bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-2xl"
                  }
                >
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>
                <div className="flex justify-start w-64 ">
                  {" "}
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-red-300 mb-3 text-sm flex-1 text-left ">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>
                <div
                  className={
                    formik.touched.password && formik.errors.password
                      ? "bg-gray-100 w-64 p-2 mb-3 flex items-center rounded-2xl border-2 border-rose-300"
                      : "bg-gray-100 w-64 p-2 mb-3 flex items-center rounded-2xl "
                  }
                >
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                </div>
                <div className="flex justify-start w-64 ">
                  {" "}
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-red-300 mb-3 text-sm flex-1 text-left ">
                      {formik.errors.password}
                    </p>
                  ) : null}
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

                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                  className={
                    !formik.isValid && formik.errors
                      ? "border-2 border-blue-900 text-blue-900 mb-3 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white"
                      : "border-2 border-blue-900 text-blue-900 mb-3 rounded-full px-12 py-2 inline-block font-semibold "
                  }
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LogIn;
