import React from "react";

const UsersTable = () => {
  return (
    <div>
      <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead className="text-white">
          <tr className="bg-gray-300 text-gray-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th className="p-3 text-left">Id</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Password</th>
            <th className="p-3 text-left" width="110px">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="flex-1 sm:flex-none">
          <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td className="border-grey-light border hover:bg-gray-100 p-3">1</td>
            <td className="border-grey-light border hover:bg-gray-100 p-3">John</td>
            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
              contato@johncovv.com
            </td>
            <td className="border-grey-light border hover:bg-gray-100 p-3">
              starlabs
            </td>
            <td className="border-grey-light border hover:bg-gray-100 p-3 text-yellow-800 hover:font-medium cursor-pointer">
              Admin
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
