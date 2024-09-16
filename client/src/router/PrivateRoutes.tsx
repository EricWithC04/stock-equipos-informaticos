import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const PrivateRoutes = () => {

    const { userData } = useUserContext()

    return (
        userData && userData.isLogged ? <Outlet /> : <Navigate to="/" replace={true} />
    )
}

export default PrivateRoutes