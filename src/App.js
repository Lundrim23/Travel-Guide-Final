import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Places from "./pages/Places";
import Testplaces from "./pages/Testplaces";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

import Admin from "./pages/Admin";

import Error from "./pages/Error";
import LogIn from "./pages/Login";
import Users from "./pages/Users";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="places" element={<Places />} />
          <Route path="palces/test" element={<Testplaces />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="register" element={<Register />} />

        <Route path="admin" element={<Admin />} />

        <Route path="login" element={<LogIn />} />

        <Route path="users" element={<Users />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
