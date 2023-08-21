import { createBrowserRouter } from "react-router-dom";
import AllNotice from "../../Components/Dashboard/AdminComponents/AllNotices/AllNotice";
import PublicNotice from "../../Components/Dashboard/AdminComponents/PublicNotice/PublicNotice";
import Students from "../../Components/Dashboard/AdminComponents/Students/Students";
import Home from "../../Components/Dashboard/Home/Admin/Home";
import Attendance from "../../Components/Dashboard/Home/Teacher/Attendance";
import Notices from "../../Components/Dashboard/Home/Teacher/Notices";
import Resources from "../../Components/Dashboard/Home/Teacher/Resources";
import Teacher from "../../Components/Dashboard/Home/Teacher/Teacher";
import Main from "../../Layout/Dashboard/Main";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
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
            element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
            path: "admin-notices",
            element: <PrivateRoute><AllNotice></AllNotice></PrivateRoute>
        },
        {
            path: 'public-notice',
            element: <PrivateRoute><PublicNotice></PublicNotice></PrivateRoute>
        },
        {
            path: 'login',
            element: <SignIn></SignIn>
        },
        {
            path: "teachers",
            element: <PrivateRoute><Teacher></Teacher></PrivateRoute>
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
            element: <PrivateRoute><Attendance></Attendance></PrivateRoute>
        },
        {
            path: 'notices',
            element: <PrivateRoute><Notices></Notices></PrivateRoute>
        },
        {
            path: 'resources',
            element: <PrivateRoute><Resources></Resources></PrivateRoute>
        },
        {
            path: '/students',
            element: <PrivateRoute><Students></Students></PrivateRoute>
        }
    ]
    }
])

export default router;