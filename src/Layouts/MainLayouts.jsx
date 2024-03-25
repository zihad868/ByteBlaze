import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const MainLayouts = () => {
    return (
        <div>
            <div className="h-[70px]">
                <Nav />
            </div>
            
            <div className="min-h-[calc(100vh-136px)]">
              <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default MainLayouts;