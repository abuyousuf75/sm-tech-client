import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log( )
    const {user,looding} = useContext(AuthContext);
    
    if(looding){
        return <div className="text-center "><span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span></div>
    }
    if(user) {
        return children;
    }
    return (
       <Navigate to='/login' state={location.pathname}>

       </Navigate>
    );
};

export default PrivateRoute;