import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import routesList from "./routesList";
import useIsAuthenticated from "../hooks/useIsAuthenticated";

const PageRoutes = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Routes>
      {routesList.map((route) => {
        return (
          <Route
            exact
            key={route.link}
            path={route.link}
            element={
              isAuthenticated && route.authRelated ? (
                <Navigate to="/" />
              ) : (
                <route.component />
              )
            }
          />
        );
      })}
    </Routes>
  );
};

export default PageRoutes;
