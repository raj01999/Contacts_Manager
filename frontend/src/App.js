import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import TotalContacts from "./pages/TotalContacts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<TotalContacts />} />
      </Routes>
    </div>
  );
}

export default App;
