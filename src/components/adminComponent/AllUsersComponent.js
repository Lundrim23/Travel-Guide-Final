import React from "react";
import AdminTable from './adminTable';

const AllUsersComponent = () => {
  return (
    <>
              {/* table starts here */}
              <h1 className="p-5 font-bold text-gray-600">Users</h1>
              <div className="container p-5 ">
                <AdminTable />
              </div>
              {/* table ends here */}
    </>
  );
};

export default AllUsersComponent;