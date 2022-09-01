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
import SearchPage from "./pages/SearchPage"

import Scroll from "./components/Smooth-Scrollbar/SmoothScroll";

import EventComponent from "./components/adminComponent/EventComponent";
import PlaceComponent from "./components/adminComponent/PlaceComponent";
import AllUsersComponent from "./components/adminComponent/AllUsersComponent";
import CountryComponent from "./components/adminComponent/CountryComponent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="places" element={<Places />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<SearchPage/>} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="admin" element={<Admin />} />
        

        <Route path="admin" element={<Admin />}>
          <Route path="event" element={<EventComponent />} />
          <Route path="places" element={<PlaceComponent />} />
          <Route path="country" element={<CountryComponent />} />
          <Route path="users" element={<AllUsersComponent />} />
        </Route>

        <Route path="login" element={<LogIn />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
