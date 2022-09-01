import React from "react";
import UserProfile from "../components/UserProfile";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
function Users() {
  return (
    <div>
      {/* <Dashboardnav /> */}
      {/* <Sidebar /> */}
<Navigation />
      <UserProfile />
<Footer/>
    </div>
  );
}

export default Users;
