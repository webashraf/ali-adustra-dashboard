import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";

const TsignUp = () => {
  const {user ,createUserUsingEmailAndPass, updateUserProfile} = useContext(AuthContext);
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        // console.log(data.text, data.url, data.email, data.password);
        const email = data.email;
        const password = data.password;

        // console.log(data);
        const newUser = {
          userName: data.text,
          userEmail: data.email,
          userPhoto: data.url,
          role: "teacher",
          registerDate: new Date()
        }
        console.log(newUser);

        createUserUsingEmailAndPass(email, password)
        .then(result => {

          console.log("result signup")

          // Add user on mongodb
          fetch('http://localhost:3000/addUser', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
          })
          .then(response => console.log(response))
          .catch(error => console.log(error))


          // Update name and photo on firebase
          updateUserProfile(data.text, data.url)

          .then(() => {

          }).catch((error) => {
            console.log("updateUserProfile EROOR", error);
          });

        })
        .catch(error => {

          console.log(error);
          
        })

      };
      if (user) {
        return <Navigate to={"/"}></Navigate>
      }
    return (
        <div className="flex justify-center py-20 shadow-2xl  mx-auto mt-20 rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="loginForm space-y-4 w-[300px]"
        >
          <h2 className="font-serif font-bold text-4xl pb-5 underline">Register as a Teacher</h2>

          <div>
            <Controller
              name="text"
              control={control}
              rules={{
                required: "Email is required",
              }}
              render={({ field }) => <input {...field} placeholder="Your name" />}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <Controller
              name="url"
              control={control}
              rules={{
                required: "Email is required",
              }}
              render={({ field }) => <input {...field} placeholder="Photo url" />}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
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
          <input className="bg-[#efefef] border-b-4 border-black btn-block py-2 font-bold"  type="submit" value="Submit" />

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