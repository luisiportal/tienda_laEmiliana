import {  Navigate, Outlet, useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "../stores/isAuthenticatedStore";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { verifyTokenRequest } from "../api/auth.api";
import { useLoader } from "../stores/loaderStore";
import LoaderTanStack from "../DesingSystem/LoaderTanStack";

const ProtectedRoutes = () => {
  const { isAuthenticated, setIsAuthenticated, setUser,setIsAdmin } = useIsAuthenticated();
  const { setLoader, loader } = useLoader();
  const navigate = useNavigate()

  useEffect(() => {
    const verify = async () => {
      try {
        setLoader(true)
        const token = Cookies.get("token") || "";
        const response = await verifyTokenRequest(token);
        setUser(response.data.user);
           if (response.data.user.role === "admin") {
        setIsAdmin(true);
      }
        setIsAuthenticated(true);
        //  navigate("/");
      } catch (error) {
        console.log(error);
         navigate('/admin/login');
      } finally {
        setLoader(false);
      }
    };
    !isAuthenticated && verify();
  }, []);
  if (!isAuthenticated && loader) return <LoaderTanStack />;

 // if (!isAuthenticated) return <Navigate to="/admin/login" replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
