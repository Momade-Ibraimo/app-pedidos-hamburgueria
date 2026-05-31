import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home";
import UsersOrder from "./Containers/UsersOrder";

function MyRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/orders" element={<UsersOrder />} />
            </Routes>
        </HashRouter>
    )
}

export default MyRoutes;
