import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>

      </Route>
    </Routes>
  )
}