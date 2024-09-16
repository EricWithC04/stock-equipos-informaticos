import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const PublicRoutes = () => {

    const { userData } = useUserContext()

    return (
        userData && userData.isLogged ? <Navigate to="/stock" replace={true} /> : <Outlet />
    )
}

export default PublicRoutes