import { Routes, Route } from "react-router-dom";
import "./styles/_global.scss";
import Landing from "./pages/Landing/Landing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
