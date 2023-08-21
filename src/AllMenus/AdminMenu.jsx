import React, { useContext } from 'react';
import { BsFillPersonLinesFill, BsPaperclip, BsPersonVideo3, BsStarHalf } from 'react-icons/bs';
import { GiPublicSpeaker } from 'react-icons/gi';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { PiStudentFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Firebase/AuthProvider/AuthProvider';

const AdminMenu = () => {
    const { user, signOutUser } = useContext(AuthContext);
    // console.log(user);
    const logOutBtn = () => {
        signOutUser().then((result) => { });
    };
    return (
        <>

            <ul
                className="text-md text-white py-20 space-y-2 menu p-4 w-80 h-full"
            >
                <Link to={"/"} className="flex items-center gap-3 text-[#ffffffa4]">
                    {" "}
                    <BsStarHalf /> Dashboard
                </Link>
                <Link
                    to={"/teachers"}
                    className="flex items-center gap-3 text-[#ffffffa4]"
                >
                    <BsPersonVideo3 />
                    Teacher
                </Link>
                <Link to={"/students"} className="flex items-center gap-3 text-[#ffffffa4]">
                    <PiStudentFill />
                    Students
                </Link>
                <Link className="flex items-center gap-3 text-[#ffffffa4]">
                    <BsFillPersonLinesFill /> Class
                </Link>
                <Link to={"/admin-notices"} className="flex items-center gap-3 text-[#ffffffa4]">
                    <BsPaperclip /> Notices
                </Link>
                <Link to={"/public-notice"} className="flex items-center gap-3 text-[#ffffffa4]">
                    <GiPublicSpeaker /> Public Notices
                </Link>                
                <Link to={"/"} className="flex items-center gap-3 text-[#ffffffa4]">
                    <GiPublicSpeaker /> Manage Class
                </Link>

                <Link className="flex items-center gap-3 text-[#ffffffa4]">
                    <HiOutlineDocumentReport /> Reports
                </Link>
                <Link>
                    <button onClick={logOutBtn} className="btn btn-sm bg-red-600 z-10">
                        LogOut
                    </button>
                </Link>
            </ul>

        </>
    );
};

export default AdminMenu;