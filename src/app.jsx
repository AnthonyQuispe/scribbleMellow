import { Routes, Route } from "react-router-dom";
import "./styles/_global.scss";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
