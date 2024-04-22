import { useEffect } from "react";

import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/app/models/Login";

import { Facebook } from "react-bootstrap-icons";
import { Google } from "react-bootstrap-icons";

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
    <div className="flex justify-center sm:mt-12 mt-2">
      <div className="">
        <div className="rounded-sm sm:border-[1px] border-primary sm:w-[420px] w-full p-8">
          <form className="flex flex-col" onSubmit={handleSubmit(submitData)}>
            <h1
              className={`${pacifico.className} text-primary text-center text-[35px] px-2`}
            >
              Shindig
            </h1>

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

            {/* Log in */}
            <button className="bg-primary text-white font-semibold text-xl rounded-sm p-3 mt-8">
              Login
            </button>
          </form>

          {/* Sign in with Demo Account */}
          <p className="text-center mt-6">
            <button
              onClick={handleSubmit(demoAccount)}
              className="text-white text-center font-semibold"
            >
              Sign in with Demo Account
            </button>
          </p>

          {/* OR */}
          <div className="flex justify-between mt-8">
            <div className="border-t-[1px] border-primary w-[40%] self-center"></div>
            <p className="text-white text-sm">OR</p>
            <div className="border-t-[1px] border-primary w-[40%] self-center"></div>
          </div>

          {/* OAuth */}
          <div className="mt-8">
            <button className="border-[1px] border-primary rounded-sm w-full p-2">
              <div className="flex justify-center">
                <Facebook color="white" size={20} className="self-center" />
                <p className="text-white ml-4">Log in with Facebook</p>
              </div>
            </button>
            <button className="border-[1px] border-primary rounded-sm w-full p-2 mt-6">
              <div className="flex justify-center">
                <Google color="white" size={20} className="self-center" />
                <p className="text-white ml-4">Log in with Google</p>
              </div>
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-green sm:text-base text-sm text-center mt-4">
            Please enter a valid email and password
          </p>
        )}

        {/* Don't have an Account */}
        <div className="sm:w-[420px] sm:p-0 px-8 mb-24 sm:mt-4 mt-0">
          <div className="sm:border-[1px] sm:border-primary sm:py-4 rounded-sm">
            <p className="text-center">
              <span className="text-white">Don&lsquo;t have an acccount? </span>
              <Link
                className="text-primary text-center font-semibold rounded-lg w-full"
                href={`/register`}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
