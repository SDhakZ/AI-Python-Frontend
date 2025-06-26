import { Routes, Navigate, Route } from "react-router-dom";
import AIHome from "./Ai/home";
import AIRoutes from "./Ai/routes";
import Navbar from "../../layouts/navbar";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Navigate to="ai" replace />} />
        <Route path="ai" element={<AIHome />} />
        <Route path="ai/*" element={<AIRoutes />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
