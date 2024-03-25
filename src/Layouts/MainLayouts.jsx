import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayouts = () => {
    return (
        <div>
            <div className="h-[70px]">
                <Nav />
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayouts;