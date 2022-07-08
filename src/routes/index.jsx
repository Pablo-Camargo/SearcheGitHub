import { Routes, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import Repos from "../components/Repos/Repos";
import RepoDetails from "../components/RepoDetails/RepoDetails";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":name/repos" element={<Repos />} />
            <Route
                path=":loginName/commits/repo/:repoName"
                element={<RepoDetails />}
            />
        </Routes>
    );
};
export default AppRoutes;
