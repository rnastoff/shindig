import { useEffect } from "react";

import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/app/models/Login";

import { Pacifico } from "next/font/google";
const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

type FormData = z.infer<typeof LoginSchema>;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });

  // Delete Me
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const submitData = () => {};

  const demoAccount = () => {};

  const error = errors.email || errors.password;

  return (
    <div className="flex justify-center sm:mt-12 mt-4">
      {/* Error */}
      {/* {Object.values(errors)[0]?.message && displayErrorMessage(Object.values(errors)[0]?.message)}
      {submitError && displayErrorMessage(submitError)} */}
      {/* Form */}

      {}
      <div>
        <h1 className={`${pacifico.className} text-primary text-center text-[35px] px-2`}>
          Shindig
        </h1>
        <div className="rounded-sm border-[1px] border-primary sm:w-[420px] mt-4 shadow-xl w-full p-8">
          <form className="flex flex-col" onSubmit={handleSubmit(submitData)}>
            <h2 className="text-white text-center text-2xl font-bold">Login</h2>

            {/* Email */}
            <div className="flex flex-col border-darkbg mt-4">
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="bg-background border-[1px] border-primary text-white p-2 rounded-sm outline-0 mt-1"
                {...register("email")}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col border-darkbg mt-8">
              <div className="flex justify-between">
                <label className="text-white" htmlFor="password">
                  Password
                </label>
                <Link
                  className="text-white sm:text-sm text-xs self-center"
                  href={`/forgetpassword`}
                >
                  Forget Password?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                className="bg-background border-[1px] border-primary text-white p-2 rounded-sm outline-0 mt-1"
                {...register("password")}
              />
            </div>

            <button className="bg-primary text-white font-semibold text-xl rounded-sm p-3 mt-8">
              Login
            </button>
          </form>

          <p className="text-center mt-6">
            <button
              onClick={handleSubmit(demoAccount)}
              className="text-white text-center font-semibold"
            >
              Demo Account
            </button>
          </p>
        </div>
        {error && (
          <p className="text-green sm:text-base text-sm text-center mt-4">
            Please enter a valid email and password
          </p>
        )}
        <p className="text-center mt-6">
          <Link
            className="text-primary text-center font-semibold rounded-lg mt-4 w-full"
            href={`/register`}
          >
            Create a New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
