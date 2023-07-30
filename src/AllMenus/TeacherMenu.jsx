import React from 'react';
import { Link } from 'react-router-dom';

const TeacherMenu = () => {
    return (
        <ul className="text-lg
        text-white py-20 space-y-2 menu p-4 w-80 h-full">

            <Link to={"/"} className={({isActive, isPending}) => isActive ? "text-red-500" : "text-yellow-600" }>Dashboard</Link>
            <Link to={"/attendance"}>Attendance</Link>
            <Link to={"/notices"}>Notices</Link>
            <Link to={"/resources"}>Resources</Link>

        </ul>
    );
};

export default TeacherMenu;