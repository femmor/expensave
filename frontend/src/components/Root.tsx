import { Navigate } from "react-router-dom";

const Root = () => {
    // Check if the user is logged in, if token exists in local storage
    // If the user is logged in, redirect to the dashboard
    // If the user is not logged in, redirect to the login page

    const isAuthenticated = !!localStorage.getItem("token");

  return (
    isAuthenticated ? (
      <Navigate to="/dashboard" />
    ) : (
      <Navigate to="/login" />
    )
  )
}
export default Root