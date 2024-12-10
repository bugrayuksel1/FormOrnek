import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UrunBilgiler from "./Pages/UrunBilgiler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="urunler" element={<UrunBilgiler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
