import { AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { userSchema } from "./Utils/Schema/user-validation.schema";

function Register() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values, actions) => {
      if (formik.isValid) {
        await new Promise((reset) => setTimeout(reset, 1000));
        actions.resetForm();
      }
    },
  });
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

              <form
                className="flex flex-col items-center"
                onSubmit={formik.handleSubmit}
                autoComplete="off"
              >
                <div
                  className={
                    formik.touched.username && formik.errors.username
                      ? "bg-gray-100 w-64 p-2 mb-3 flex items-center rounded-2xl border-2 border-rose-300"
                      : "bg-gray-100 w-64 p-2 mb-3 flex items-center rounded-2xl "
                  }
                >
                  <AiOutlineUser className="text-gray-400 m-2" />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    autoFocus
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-start w-64 ">
                  {" "}
                  {formik.touched.username && formik.errors.username ? (
                    <p className="text-red-300 mb-3 text-sm flex-1 text-left ">
                      {formik.errors.username}
                    </p>
                  ) : null}
                </div>

                <div
                  className={
                    formik.touched.email && formik.errors.email
                      ? "bg-gray-100 w-64 p-2 mb-3 flex items-center rounded-2xl border-2 border-rose-300"
                      : "bg-gray-100 w-64 p-2 mb-3 flex items-center rounded-2xl "
                  }
                >
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="bg-gray-100 outline-none text-sm flex-1"
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
                    formik.touched.phone && formik.errors.phone
                      ? "bg-gray-100 w-64 p-2 mb-3 flex items-center rounded-2xl border-2 border-rose-300"
                      : "bg-gray-100 w-64 p-2 mb-3 flex items-center rounded-2xl "
                  }
                >
                  <AiOutlinePhone className="text-gray-400 m-2" />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-start w-64 ">
                  {" "}
                  {formik.touched.phone && formik.errors.phone ? (
                    <p className="text-red-300 mb-3 text-sm flex-1 text-left ">
                      {formik.errors.phone}
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="bg-gray-100 outline-none text-sm flex-1"
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

                <div
                  className={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "bg-gray-100 w-64 p-2 mb-3 flex items-center rounded-2xl border-2 border-rose-300"
                      : "bg-gray-100 w-64 p-2 mb-3 flex items-center rounded-2xl "
                  }
                >
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Passwod"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex justify-start w-64 ">
                  {" "}
                  {formik.touched.confirmPassword ? (
                    <p className="text-red-300 mb-3 text-sm flex-1 text-left ">
                      {formik.errors.confirmPassword}
                    </p>
                  ) : null}
                </div>
                <div className="flex justify-between w-64 mb-5 pt-3 rounded-2xl">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />{" "}
                    Remember me
                  </label>
                </div>

                <button
                  disabled={!formik.isValid}
                  type="submit"
                  className={
                    !formik.isValid
                      ? "border-2 border-blue-900 text-blue-900 mb-3 rounded-full px-12 py-2 inline-block font-semibold opacity-50"
                      : "border-2 border-blue-900 text-blue-900 mb-3 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 hover:text-white"
                  }
                >
                  Register
                </button>
              </form>
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
