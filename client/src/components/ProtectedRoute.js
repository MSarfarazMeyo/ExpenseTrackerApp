import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  //check if user is login in
  const { pathname } = useLocation();
  const userLogin = localStorage.getItem("token");

  return userLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: pathname }} replace />
  );

  // return userLogin ? Component : <Navigate to="/login" />;

  // return (
  //   <Route
  //     {...rest}
  //     render={() =>
  //       userLogin ? <Component {...rest} /> : <Navigate to="/login" />
  //     }
  //   />
  // );
};
export default ProtectedRoute;
//   if (!userLogin) {
//     // not logged in so redirect to login page with the return url
//     return <Navigate to="/login" />;
//   }

//   // authorized so return child components
//   return <Component {...rest} />;
// };
