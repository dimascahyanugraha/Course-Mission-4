import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // ← tambah Navigate
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />{" "}
        {/* ← tambah ini */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
