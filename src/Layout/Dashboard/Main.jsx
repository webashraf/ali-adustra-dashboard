import { useContext } from "react";
import {
  BsFillPersonLinesFill,
  BsPaperclip,
  BsPersonVideo3,
  BsStarHalf,
} from "react-icons/bs";
import { } from "react-icons/fa";
import { GiPublicSpeaker } from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import TeacherMenu from "../../AllMenus/TeacherMenu";
import Navbar from "../../Components/Dashboard/Home/Navbar/Navbar";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";

const Main = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const logOutBtn = () => {
    signOutUser().then((result) => { });
  };

  const adminMenu = (
    <ul
      className="text-md
    text-white py-20 space-y-2 menu p-4 w-80 h-full"
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
      <li className="flex items-center gap-3 text-[#ffffffa4]">
        <BsFillPersonLinesFill /> Class
      </li>
      <li className="flex items-center gap-3 text-[#ffffffa4]">
        <PiStudentFill />
        Student
      </li>
      <li className="flex items-center gap-3 text-[#ffffffa4]">
        <BsPaperclip /> Notices
      </li>
      <li className="flex items-center gap-3 text-[#ffffffa4]">
        <GiPublicSpeaker /> Public Notices
      </li>

      <li className="flex items-center gap-3 text-[#ffffffa4]">
        <HiOutlineDocumentReport /> Reports
      </li>
      <li>
        {" "}
        <button onClick={logOutBtn} className="btn btn-sm">
          LogOut
        </button>
      </li>
    </ul>
  );



  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full">
          {/* Page content here */}
          <Navbar></Navbar>
          <div className="w-[840px] mx-auto">
            <Outlet></Outlet>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <>
            {/* Sidebar content here */}
            <div className="bg-slate-900 h-full">
              <div>
                <Link to={"/"}>
                  <h1 className="text-5xl py-6 border-b-[2px] text-white text-center font-serif">
                    AliEdustra
                    <h2 className="text-4xl">{user && user.displayName}</h2>
                  </h1>
                </Link>
              </div>
              <TeacherMenu></TeacherMenu>
              {/* {adminMenu} */}
            </div>
          </>
        </div>
      </div>

    </div>
  );
};

export default Main;
