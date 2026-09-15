import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

export const routes:RouteObject[] = [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "*",
        element: <NotFound />
    }
]