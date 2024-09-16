import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const PrivateRoutes = () => {

    const { userData } = useUserContext()

    return (
        userData && userData.isLogged ? <Outlet /> : <Navigate to="/login" replace={true} />
    )
}

export default PrivateRoutes