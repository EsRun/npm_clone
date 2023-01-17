import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout, Main, Pro, Teams, Pricing, Docu, Error } from "./pages";
import { Login, SignUp } from "./pages/auth";

function App() {
  useEffect(() => {
    console.log("rendering...");
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="product" element={<Pricing />}></Route>
          <Route path="product/pro" element={<Pro />}></Route>
          <Route path="product/teams" element={<Teams />}></Route>
          <Route path="documentation" element={<Docu />}></Route>
          <Route path="/error" element={<Error />}></Route>
        </Route>
        <Route path="/*" element={<Navigate to="/error" replace />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
