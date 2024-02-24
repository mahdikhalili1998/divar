import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import DashbordPage from "pages/DashbordPage";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import PageNotFound from "pages/404";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "services/user";
import Loader from "components/Loader";

function Router() {
  const { data, isLoading, error } = useQuery(["user"], getUser);
  // console.log({ data, isLoading, error });
  if (isLoading) return <Loader />;
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/dashbord"
        element={data ? <DashbordPage /> : <Navigate to="/auth" />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashbord" /> : <AuthPage />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
