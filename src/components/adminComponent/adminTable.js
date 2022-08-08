import React from "react";
import '../adminComponent/admin.css';

const AdminTable = () => {
  return (
    <div>
      <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead class="text-white">
          <tr class="bg-gray-300 text-gray-700 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th class="p-3 text-left">Id</th>
            <th class="p-3 text-left">Name</th>
            <th class="p-3 text-left">Email</th>
            <th class="p-3 text-left">Password</th>
            <th class="p-3 text-left" width="110px">
              Role
            </th>
          </tr>
        </thead>
        <tbody class="flex-1 sm:flex-none">
          <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td class="border-grey-light border hover:bg-gray-100 p-3">1</td>
            <td class="border-grey-light border hover:bg-gray-100 p-3">John</td>
            <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
              contato@johncovv.com
            </td>
            <td class="border-grey-light border hover:bg-gray-100 p-3">
              starlabs
            </td>
            <td class="border-grey-light border hover:bg-gray-100 p-3 text-yellow-800 hover:font-medium cursor-pointer">
              Admin
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
