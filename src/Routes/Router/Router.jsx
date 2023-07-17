import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Dashboard/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>
    }
])

export default router;