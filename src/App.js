import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Places from "./pages/Places";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Error from "./pages/Error";
import LogIn from "./pages/Login";
import Users from "./pages/Users";
import SearchPage from "./pages/SearchPage";
import Api from "./pages/Api";
import SpecificPlace from "./pages/SpecificPlace";
import Chat from "./pages/Chat";

import "./App.css";
import Reviews from "./pages/Reviews";
import UserProfileSettings from "./components/UserProfileSettings";
import Newadmin from "./pages/Newadmin";
import UserList from "./components/adminComponent/pages/UserList";
import Homee from "./components/adminComponent/pages/Home";
import EditEvent from "./components/adminComponent/pages/EditEvent";
import AddEvent from "./components/adminComponent/pages/AddEvent";
import AddPlace from "./components/adminComponent/pages/AddPlace";
import AddCountry from "./components/adminComponent/pages/AddCountry";
import EventTable from "./components/adminComponent/pages/EventTable";
import EditPlace from "./components/adminComponent/pages/EditPlace";
import PlaceTable from "./components/adminComponent/pages/PlaceTable";
import EditCountry from "./components/adminComponent/pages/EditCountry";
import TableCountry from "./components/adminComponent/pages/TableCountry";
import Settings from "./components/adminComponent/pages/Settings";
import FullPost from "./components/FullPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="places" element={<Places />} />
          <Route path="about" element={<About />} />

          <Route path="events" element={<Events />}>
            {/* <Route path="/events/fullpost/:id" element={<FullPost />}/> */}
          </Route>

          <Route path="/events/fullpost/" element={<FullPost />}/>

          <Route path="api" element={<Api />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="specific-place" element={<SpecificPlace />} />
          <Route path="userprofilesettings" element={<UserProfileSettings />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="chat" element={<Chat />} />
        <Route path="admin" element={<Newadmin />}>
          <Route path="" element={<Homee />} />
          <Route path="users" element={<UserList />} />
          <Route path="events" element={<EventTable />}>
            <Route path="editevent/:id" element={<EditEvent />} />
          </Route>
          <Route path="places" element={<PlaceTable />}>
            <Route path="editplace/:id" element={<EditPlace />} />
          </Route>
          <Route path="countries" element={<TableCountry />}>
            <Route path="editcountry/:id" element={<EditCountry />} />
          </Route>
          <Route path="newevent" element={<AddEvent />} />
          <Route path="newplace" element={<AddPlace />} />
          <Route path="newcountry" element={<AddCountry />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="reviews" element={<Reviews />} />
        <Route path="login" element={<LogIn />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
