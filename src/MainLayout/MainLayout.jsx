import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubNav from "../components/SubNav";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SubNav></SubNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;