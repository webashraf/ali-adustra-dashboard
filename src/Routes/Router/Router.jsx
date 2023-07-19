import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Dashboard/Main";
import Home from "../../Components/Dashboard/Home/Home";
import Teacher from "../../Components/Dashboard/Home/Teacher/Teacher";
import SignIn from "../../UserEntry/Student/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
            path: "/",
            element: <SignIn></SignIn>
        },
        {
            path: "/teachers",
            element: <Teacher></Teacher>
        }
    ]
    }
])

export default router;