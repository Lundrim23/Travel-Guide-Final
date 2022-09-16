import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Places from "./pages/Places";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import LogIn from "./pages/Login";
import Users from "./pages/Users";
import SearchPage from "./pages/SearchPage";
// import Scroll from "./components/Smooth-Scrollbar/SmoothScroll";
import SpecificPlace from "./pages/SpecificPlace";

// import EventComponent from "./components/adminComponent/EventComponent";
// import PlaceComponent from "./components/adminComponent/PlaceComponent";
// import AllUsersComponent from "./components/adminComponent/AllUsersComponent";
// import CountryComponent from "./components/adminComponent/CountryComponent";
import "./App.css";
import Reviews from "./pages/Reviews";
import UserProfileSettings from "./components/UserProfileSettings";
import Newadmin from "./pages/Newadmin";
import UserList from "./components/adminComponent/pages/UserList";
import Homee from "./components/adminComponent/pages/Home";
import EventComponent from "./components/adminComponent/pages/EventComponent";
import PlaceComponent from './components/adminComponent/pages/PlaceComponent'
import CountryComponent from "./components/adminComponent/pages/CountryComponent";
import EditEvent from "./components/adminComponent/pages/EditEvent";
import AddEvent from "./components/adminComponent/pages/AddEvent";
import AddPlace from "./components/adminComponent/pages/AddPlace";
import AddCountry from "./components/adminComponent/pages/AddCountry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="places" element={<Places />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="specific-place" element={<SpecificPlace />} />
          <Route path="UserProfileSettings" element={<UserProfileSettings />} />
        </Route>
        <Route path="register" element={<Register />} />

        <Route path="admin" element={<Newadmin />}>
          <Route path="" element={<Homee />} />
          <Route path="users" element={<UserList />} />
          <Route path="events" element={<EventComponent />}>
            <Route path="editevent" element={<EditEvent />} />
          </Route>
          <Route path="places" element={<PlaceComponent />} />
          <Route path="countries" element={<CountryComponent />} />
          <Route path="newevent" element={<AddEvent />} />
          <Route path="newplace" element={<AddPlace />} />
          <Route path="newcountry" element={<AddCountry />} />
        </Route>

        {/* <Route path="admin" element={<Admin />} />
        

        <Route path="admin" element={<Admin />}>
          <Route path="event" element={<EventComponent />} />
          <Route path="places" element={<PlaceComponent />} />
          <Route path="country" element={<CountryComponent />} />
          <Route path="users" element={<AllUsersComponent />} />
        </Route> */}

        <Route path="reviews" element={<Reviews />} />
        <Route path="login" element={<LogIn />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
