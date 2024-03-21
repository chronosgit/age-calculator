import { Navigate } from "react-router-dom";
import Home from "@pages/home/Home";
import PageNotFound from "@pages/page-not-found/PageNotFound";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/not-found",
        element: <PageNotFound />
    },
    {
        path: "*",
        element: <Navigate to="/not-found" />
    },
];

export default routes;