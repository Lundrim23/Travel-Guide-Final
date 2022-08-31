import React from "react";
import "../adminComponent/admin.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUser,
  loadUsers,
  deleteUser,
} from "../../redux/features/users/userSlice";
import { useEffect } from "react";

const AdminTable = () => {
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
    <div>
      <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead className="text-white">
          <tr className="bg-gray-300 text-gray-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th className="p-3 text-left">Id</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left" width="110px"></th>
          </tr>
        </thead>
        {users.map((item) => {
          return (
            <tbody className="flex-1 sm:flex-none">
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {item.id}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {item.name}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                  {item.email}
                </td>
                <td className="border-grey-light border hover:bg-gray-100 p-3">
                  {item.role}
                </td>
                <td className="border-grey-light border p-3 text-yellow-800 hover:font-medium cursor-pointer">
                  <button
                    onClick={() => dispatch(deleteUser({ id: item.id }))}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Detele
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default AdminTable;
