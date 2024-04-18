import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

const Register = () => {
  const handleSubmit = () => {};

  return (
    <div className="flex justify-center sm:mt-12 mt-4">
      {/* Error */}
      {/* {Object.values(errors)[0]?.message && displayErrorMessage(Object.values(errors)[0]?.message)}
  {submitError && displayErrorMessage(submitError)} */}
      {/* Form */}
      <div>
        <h1 className={`${pacifico.className} text-primary text-center text-[35px] px-2`}>
          Shindig
        </h1>

        <div className="rounded-sm border-[1px] border-primary sm:w-[500px] sm:h-[610px] h-[730px] w-full h-full mt-4">
          <form className="flex flex-col px-8" onSubmit={handleSubmit()}>
            <h2 className="text-white text-center text-2xl font-bold mt-6">Register</h2>

            <div className="flex sm:flex-row flex-col justify-between">
              {/* FIRST NAME */}
              <div className={`flex flex-col mt-8 sm:w-[200px]`}>
                <label className="text-white" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-background rounded-sm border-primary border-[1px] text-white p-2 outline-0 sm:w-[200px] w-[230px]"
                />
              </div>

              {/* LAST NAME */}
              <div className={`flex flex-col mt-8 sm:w-[200px] `}>
                <label className="text-white" htmlFor="firstName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={`bg-background rounded-sm border-primary border-[1px] text-white p-2 outline-0 sm:w-[200px] w-[230px]`}
                />
              </div>
            </div>

            {/*  EMAIL */}
            <div className={`flex flex-col mt-6`}>
              <label className="text-white" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`bg-background rounded-sm border-primary border-[1px] text-white p-2 outline-0 sm:w-[435px] w-[230px] `}
              />
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
              />
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
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-bold text-xl rounded-lg p-4 mt-6"
            >
              REGISTER
            </button>
            <div className="border-b-[1px] border-primary mt-6"></div>
          </form>

          <p className="text-center mt-6">
            <span className="text-white">Already have have an account? </span>
            <Link className="text-primary font-bold sm:inline block" href={`/`}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
