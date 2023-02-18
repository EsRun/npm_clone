import { lazy } from "react";

export { default as Layout } from "./Layout";
export const Main = lazy(() => import("./Main.jsx"));
export const Error = lazy(() => import("./Error.jsx"));
export const Pricing = lazy(() => import("./Pricing.jsx"));
export const Pro = lazy(() => import("./Pro.jsx"));
export const Teams = lazy(() => import("./Teams.jsx"));
export const Docu = lazy(() => import("./Documentation.jsx"));
