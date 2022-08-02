import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Places from "./pages/Places";
import Events from "./pages/Events";
import About from "./pages/About";
import Error from "./pages/Error";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="places" element={<Places />} />
        <Route path="events" element={<Events />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
