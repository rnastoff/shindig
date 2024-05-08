"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewUser } from "@/lib/validation/NewUser";

import { useCreateUserAccount } from "@/lib/react-query/queriesAndMutations";

import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

type NewUserForm = z.infer<typeof NewUser>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewUserForm>({
    resolver: zodResolver(NewUser),
  });

  const [registerError, setRegisterError] = useState("");
  const router = useRouter();

  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } =
    useCreateUserAccount();

  const handleRegister = async (user: NewUserForm) => {
    try {
      const newUser = await createUserAccount(user);

      if (!newUser) {
        setRegisterError("There was an error. Try again.");
        return;
      }

      setRegisterError("");
      router.push("/?registered=true");
    } catch (error) {
      setRegisterError("There was an error. Try again.");
    }
  };

  return (
    <div className="flex justify-center sm:mt-12 mt-0">
      <div>
        <div className="rounded-sm sm:border-[1px] sm:border-primary sm:w-[500px] w-full h-full sm:mt-4 mb-4">
          <form className="flex flex-col px-8" onSubmit={handleSubmit(handleRegister)}>
            <h1
              className={`${pacifico.className} text-primary text-center text-[35px] px-2 mt-8`}
            >
              Shindig
            </h1>

            <div className={`flex flex-col mt-6`}>
              <label className="text-white" htmlFor="email">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`bg-background rounded-sm border-primary border-[1px] text-white p-2 outline-0 sm:w-[435px] w-[230px] `}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-green sm:text-base text-sm text-center mt-4">
                  {errors.name.message}
                </p>
              )}
            </div>

            {errors.name && (
              <p className="text-green sm:text-base text-sm text-center mt-4">
                Please enter valid first and last name
              </p>
            )}

            {/*  EMAIL */}
            <div className={`flex flex-col mt-6`}>
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`bg-background rounded-sm border-primary border-[1px] text-white p-2 outline-0 sm:w-[435px] w-[230px] `}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-green sm:text-base text-sm text-center mt-4">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/*  PASSWORD */}
            <div className={`flex flex-col mt-6`}>
              <label className="text-white" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`bg-background rounded-sm border-primary border-[1px] text-white p-2 outline-0 sm:w-[435px] w-[230px] `}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-green sm:text-base text-sm text-center mt-4">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/*  CONFIRM PASSWORD */}
            <div className={`flex flex-col mt-6`}>
              <label className="text-white" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className={`bg-background rounded-sm border-primary border-[1px] text-white  p-2 outline-0 sm:w-[435px] w-[230px] `}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-green sm:text-base text-sm text-center mt-4">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-bold text-xl rounded-sm p-4 mt-6"
              disabled={isSubmitting}
            >
              {!isSubmitting && "Register"}
              {isSubmitting && (
                <div>
                  <div
                    className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-white border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  ></div>
                  <span className="text-white ml-4">Submitting...</span>
                </div>
              )}
            </button>
            <div className="border-b-[1px] border-primary mt-6"></div>
          </form>

          <p className="sm:text-base text-sm text-center mt-6">
            <span className="text-white">Already have have an account? </span>
            <Link className="text-primary font-bold sm:inline block" href={`/`}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
