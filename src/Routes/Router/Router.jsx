import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Dashboard/Main";
import Home from "../../Components/Dashboard/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
            path: "/",
            element: <Home></Home>
        }
    ]
    }
])

export default router;