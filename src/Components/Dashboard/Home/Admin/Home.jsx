import { useQuery } from "@tanstack/react-query";
import AdminDashboard from "../../AllDeshboard/AdminDashboard";
import StudentDashboard from "../../AllDeshboard/StudentDashboard";
import TeacherDashboard from "../../AllDeshboard/TeacherDashboard";
import { useContext } from "react";
import { AuthContext } from "../../../../Firebase/AuthProvider/AuthProvider";

const Home = () => {
  const { user} = useContext(AuthContext);

  const {data: userWithRole, refetch} = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/user?email=${user?.email}`)
      return res.json()
    }
  })

  const userRole = userWithRole && userWithRole?.role;
  console.log(userRole);
  return (
    <>
    {userRole === "admin" && <AdminDashboard></AdminDashboard>}
    {userRole === "teacher" && <TeacherDashboard></TeacherDashboard>}
    {userRole === "student" && <StudentDashboard></StudentDashboard>}
    </>
  );
};

export default Home;
