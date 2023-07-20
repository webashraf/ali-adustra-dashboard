import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const TsignUp = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div className="flex justify-center py-20 shadow-2xl  mx-auto mt-20 rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="loginForm space-y-4 w-[300px]"
        >
          <h2 className="font-serif font-bold text-4xl pb-5 underline">Register as a Student</h2>
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
          <div className="">
          <h3 className="text-sky-900 pt-5">
            All ready have an account?{" "}
            <Link to={"/login"} className="underline text-sky-900 font-bold">
              SignIn now
            </Link>
            .
          </h3>
        </div>
        </form>
      </div>
    );
};

export default TsignUp;