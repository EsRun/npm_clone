import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout, Main } from "./pages";
import { Login, SignUp } from "./pages/auth";

const Error = lazy(() => import("./pages/Error.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const Pro = lazy(() => import("./pages/Pro.jsx"));
const Teams = lazy(() => import("./pages/Teams.jsx"));
const Docu = lazy(() => import("./pages/Documentation.jsx"));

function App() {
  useEffect(() => {
    console.log("rendering...");
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="product"
            element={
              <Suspense fallback={<div>로딩 중. . .</div>}>
                <Pricing />
              </Suspense>
            }
          ></Route>
          <Route
            path="product/pro"
            element={
              <Suspense fallback={<div>로딩 중. . .</div>}>
                <Pro />
              </Suspense>
            }
          ></Route>
          <Route
            path="product/teams"
            element={
              <Suspense fallback={<div>로딩 중. . .</div>}>
                <Teams />
              </Suspense>
            }
          ></Route>
          <Route
            path="documentation"
            element={
              <Suspense fallback={<div>로딩 중. . .</div>}>
                <Docu />
              </Suspense>
            }
          ></Route>
          <Route
            path="/error"
            element={
              <Suspense fallback={<div>로딩 중. . .</div>}>
                <Error />
              </Suspense>
            }
          ></Route>
        </Route>
        <Route path="/*" element={<Navigate to="/error" replace />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
