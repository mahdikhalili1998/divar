import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import DashbordPage from "pages/DashbordPage";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import PageNotFound from "pages/404";
function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashbord" element={<DashbordPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
