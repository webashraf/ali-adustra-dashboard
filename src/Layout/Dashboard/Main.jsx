import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import AdminMenu from "../../AllMenus/AdminMenu";
import StudentMenu from "../../AllMenus/StudentMenu";
import TeacherMenu from "../../AllMenus/TeacherMenu";
import Navbar from "../../Components/Dashboard/Home/Navbar/Navbar";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";

const Main = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const {data: userWithRole, refetch} = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/user?email=${user?.email}`)
      return res.json()
    }
  })

  const userRole = userWithRole && userWithRole?.role;
  // console.log(userRole);

  console.log("userWithRole", userWithRole);

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
            <div className="bg-slate-900 h-full fixed">
              <div>
                <Link to={"/"}>
                  <h1 className="text-5xl py-6 border-b-[2px] text-white text-center font-serif">
                    AliEdustra
                    <h2 className="text-4xl">{user && user.displayName}</h2>
                  </h1>
                </Link>
              </div>
              {userRole === "admin" && <AdminMenu></AdminMenu>}
              {userRole === "teacher" && <TeacherMenu role></TeacherMenu>}
              {userRole === "student" && <StudentMenu></StudentMenu>}
              {!userWithRole && <h4 className="text-lg font-serif text-white text-center mt-20">Loading...</h4> }

            </div>
          </>
        </div>
      </div>

    </div>
  );
};

export default Main;
