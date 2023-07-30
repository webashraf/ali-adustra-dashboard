import { createBrowserRouter } from "react-router-dom";
import Attendance from "../../Components/Dashboard/Home/Teacher/Attendance";
import Notices from "../../Components/Dashboard/Home/Teacher/Notices";
import Resources from "../../Components/Dashboard/Home/Teacher/Resources";
import Teacher from "../../Components/Dashboard/Home/Teacher/Teacher";
import Main from "../../Layout/Dashboard/Main";
import EntryDashboard from "../../UserEntry/EntryDashboard/EntryDashboard";
import SignIn from "../../UserEntry/Login/SignIn";
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
        },
        {
            path: 'attendance',
            element: <Attendance></Attendance>
        },
        {
            path: 'notices',
            element: <Notices></Notices>
        },
        {
            path: 'resources',
            element: <Resources></Resources>
        }
    ]
    }
])

export default router;