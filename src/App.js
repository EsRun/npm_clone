import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Pro, Teams, Pricing, Docu, Error } from "./pages";
import "./app.css";

function App() {
  useEffect(() => {
    console.log("rendering...");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="pro" element={<Pro />}></Route>
      <Route path="teams" element={<Teams />}></Route>
      <Route path="pricing" element={<Pricing />}></Route>
      <Route path="documentation" element={<Docu />}></Route>
      <Route path="/error" element={<Error />}></Route>
      <Route path="/*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
}

export default App;
