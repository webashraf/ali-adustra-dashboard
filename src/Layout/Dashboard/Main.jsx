import {
  BsFillPersonLinesFill,
  BsPaperclip,
  BsPersonVideo3,
  BsStarHalf,
} from "react-icons/bs";
import {} from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { GiPublicSpeaker } from "react-icons/gi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import {} from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Components/Dashboard/Home/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";

const Main = () => {
  const {user, signOutUser} = useContext(AuthContext);
  console.log(user);

  const adminMenu = (
    <ul
      className="text-md
    text-white py-20 space-y-2"
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
    </ul>
  );

  const logOutBtn = () => {
    signOutUser()
    .then(result => {})
  }



  return (
    <div className="flex">
      <div className="bg-slate-900 w-[257px] h-screen px-6">
        <div>
          <Link to={"/"}>
            <h1 className="text-3xl py-6 border-b-[2px] text-white text-center font-serif">
              AliEdustra
            </h1>
          </Link>
        </div>
        {/* {newUserMenu} */}

        {adminMenu}
        <button onClick={logOutBtn} className="btn btn-sm">LogOut</button>
      </div>

      <div className="w-full">
        <Navbar></Navbar>
        <div className="w-[840px] mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
