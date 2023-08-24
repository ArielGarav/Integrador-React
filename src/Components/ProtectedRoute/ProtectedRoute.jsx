import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children, redirectTo }) => {
  const { currentUser } = useSelector((state) => state.user);

  // Verificar si el usuario existe
  const userExists = !!currentUser;

  // Verificar si el usuario está verificado
  const isUserValidated = userExists && currentUser.verified === true;

  return userExists ? (
    isUserValidated ? (
      children
    ) : (
      <Navigate to="/Verified" state={{ redirectedFromCheckout: true }} />
    )
  ) : (
    <Navigate to="/register" state={{ redirectedFromCheckout: true }} />
  );
};

export default ProtectedRoute;
