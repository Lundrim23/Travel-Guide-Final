import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUser,
  loadUsers,
  deleteUser,
} from "../../redux/features/users/userSlice";
import { useEffect } from "react";

const UsersTable = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUsers());
  // }, [dispatch]);

  const users = useSelector((state) => state.users.users);
  const amount = useSelector((state) => state.users.amount);


  if (amount < 1) {
    return (
      <section>
        <h2 className="text-center text-3xl text-slate-400">
          We don't have any user to show!
        </h2>
      </section>
    );
  }


  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto ">
        <div className="inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-slate-300">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center "
                  >
                    -
                  </th>
                </tr>
              </thead>
              {users.map((user) => {
                return (
                  <tbody>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4  font-medium  ">{user.id}</td>
                      <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.name}
                      </td>
                      <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.role}
                      </td>
                      <td className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => dispatch(deleteUser({ id: user.id }))}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
