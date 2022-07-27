import React from "react";
import { Route, Routes } from "react-router";
import routesList from "./routesList";

const PageRoutes = () => {
  return (
    <Routes>
      {routesList.map((route) => {
        return (
          <Route
            exact
            key={route.link}
            path={route.link}
            element={<route.component />}
          />
        );
      })}
    </Routes>
  );
};

export default PageRoutes;
