import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import FamousDoctors from "./FamousDoctors";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FamousDoctors></FamousDoctors>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;