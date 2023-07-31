import { useForm, Controller } from "react-hook-form";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";
import Home from "../../Components/Dashboard/Home/Admin/Home";
const SignIn = () => {
  const { user, loading, userSignInUsingEmailAndPass } =
    useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userSignInUsingEmailAndPass(data.email, data.password).then((result) =>
      console.log(result)
    );
  };
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  return !user ? (
    <div className="flex justify-center py-20 shadow-2xl  mx-auto mt-20 rounded-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="loginForm space-y-4 w-[300px]"
      >
        <h2 className="font-serif font-bold text-4xl pb-5 underline">Login</h2>
        <div>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            }}
            render={({ field }) => <input {...field} placeholder="Email" />}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <input type="password" {...field} placeholder="Password" />
            )}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button
          className="bg-[#efefef] border-b-4 border-black btn-block py-2 font-bold"
          type="submit"
        >
          Login
        </button>
        <div>
          <h3>
            You have not account?{" "}
            <Link to={"/register"} className="underline text-sky-700">
              Register now
            </Link>
            .
          </h3>
        </div>
      </form>
    </div>
  ) : (
    // <div className="flex justify-center flex-col items-center mt-20">
    //   <div className="avatar">
    //     <div className="w-24 mask mask-squircle">
    //      {user &&  <img src={user?.photoURL} />}
    //     </div>
    //   </div>
    //   {/* <img src={user.photURL} alt="" /> */}
    //   <h1 className="text-7xl text-center font-serif">
    //     Dashboard <span className="text-sky-600">{user.displayName}</span>
    //   </h1>
    // </div>
    <Home></Home>
  );
};

export default SignIn;
