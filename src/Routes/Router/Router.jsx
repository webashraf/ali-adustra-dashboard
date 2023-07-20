import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Dashboard/Main";
import Home from "../../Components/Dashboard/Home/Home";
import Teacher from "../../Components/Dashboard/Home/Teacher/Teacher";
import SignIn from "../../UserEntry/Login/SignIn";
import EntryDashboard from "../../UserEntry/EntryDashboard/EntryDashboard";
import SignUp from "../../UserEntry/Student/SignUp";
import TsignUp from "../../UserEntry/Teacher/SignUp";

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
        },
        {
            path: 'login',
            element: <SignIn></SignIn>
        },
        {
            path: 'register',
            element: <EntryDashboard></EntryDashboard>
        },
        {
            path: 'student-signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'teacher-signup',
            element: <TsignUp></TsignUp>
        }
    ]
    }
])

export default router;