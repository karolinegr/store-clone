import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAuth = true;

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RequireAuth;
