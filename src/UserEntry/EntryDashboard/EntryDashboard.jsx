import { Link } from "react-router-dom";

const EntryDashboard = () => {
  const newUserMenu = (
    <div>
      <ul className="space-y-2">
        <div className="flex gap-4">
          <Link
            to={"/teacher-signup"}
            className="flex items-center gap-3 text-[#ffffffa4 border-b-4 border-red-500 btn-sm bg-red-200 uppercase justify-center font-bold py-5"
          >
            Sign-Up as a teacher
          </Link>

          <Link
            to={"/student-signup"}
            className="flex items-center gap-3 text-[#ffffffa4 btn-sm bg-lime-200 border-b-4 border-lime-500 justify-center font-bold py-5 uppercase"
          >
            Sign-Up as a student
          </Link>
        </div>
      </ul>
      <ul className=" space-y-2">
        <div className="">
          <h3 className="text-white pt-5">
            All ready have an account?{" "}
            <Link to={"/login"} className="underline text-sky-900 font-bold">
              SignIn now
            </Link>
            .
          </h3>
        </div>
      </ul>
    </div>
  );
  return (
    <div className="shadow-2xl py-20 flex justify-center bg-sky-300 w-[90%] mx-auto mt-10">
      {newUserMenu}
    </div>
  );
};

export default EntryDashboard;
