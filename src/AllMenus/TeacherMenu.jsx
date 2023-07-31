import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider/AuthProvider';

const TeacherMenu = () => {

    const { user, signOutUser } = useContext(AuthContext);
    // console.log(user);
    const logOutBtn = () => {
      signOutUser().then((result) => { });
    };

    return (
        <ul className="text-lg
        text-white py-20 space-y-2 menu p-4 w-80 h-full">

            <Link to={"/"} className={({isActive, isPending}) => isActive ? "text-red-500" : "text-yellow-600" }>Dashboard</Link>
            <Link to={"/attendance"}>Attendance</Link>
            <Link to={"/notices"}>Notices</Link>
            <Link to={"/resources"}>Resources</Link>
            <button onClick={logOutBtn} className="btn btn-sm bg-red-600 z-10">
          LogOut
        </button>

        </ul>
    );
};

export default TeacherMenu;