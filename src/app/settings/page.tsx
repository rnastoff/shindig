"use client";
import Wrapper from "@/components/Wrapper";
import { CloudUpload } from "react-bootstrap-icons";

/*
Change:
 -profile pic
 -password
 
*/

const Settings = () => {
  const handleImageSubmit = () => {};

  return (
    <Wrapper>
      <section className="flex justify-center bg-background px-4">
        <div className="lg:w-[550px] w-[350px] sm:mt-8 mt-24 mb-20">
          <h2 className="text-white text-2xl font-bold">Settings</h2>
          <div className="border-b-[1px] border-primary mt-2"></div>

          {/* Upload / Replace Image */}
          <form
            className="lg:w-[550px] w-[350px] sm:mt-8 mt-8 mb-20"
            onSubmit={handleImageSubmit}
          >
            <div className="w-full mt-8">
              <p className="text-white text-base font-semibold">Replace Image</p>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-[1px] border-primary  rounded-sm cursor-pointer bg-bg-background dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mt-1"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <CloudUpload className="text-xl" size="50" color="#ffffff" />

                  <p className="mb-2 text-sm text-white">
                    <span className="font-semibold">Click to upload</span> or drag and
                    drop
                  </p>
                  <p className="text-xs text-white">PNG or JPG</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <p className="text-green text-center md:text-base text-sm w-full mt-4">
              Error! The Location is required!
            </p>

            <div className="flex justify-end mt-4">
              <button className="text-white text-semi-bold md:text-lg text-base bg-primary rounded-md md:py-2 md:px-8 px-6 py-1 ">
                Submit
              </button>
            </div>
          </form>

          {/* Change password */}
          <form
            className="lg:w-[550px] w-[350px] sm:mt-8 mt-8 mb-20"
            onSubmit={handleImageSubmit}
          >
            <p className="text-white text-lg font-semibold">Change your Password</p>

            {/* Old Password */}
            <div className="mt-8">
              <label className="text-white text-base font-semibold" htmlFor="oldPassword">
                Old Password
              </label>
              <input
                className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
                type="password"
                id="oldPassword"
                name="oldPassword"
              />
            </div>

            {/* New Password */}
            <div className="mt-8">
              <label className="text-white text-base font-semibold" htmlFor="newPassword">
                New Password
              </label>
              <input
                className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
                type="password"
                id="newPassword"
                name="newPassword"
              />
            </div>

            {/* Confirm new Pasword */}
            <div className="mt-8">
              <label
                className="text-white text-base font-semibold"
                htmlFor="confirmNewPassword"
              >
                Confirm New Password
              </label>
              <input
                className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
              />
            </div>

            <p className="text-green text-center md:text-base text-sm w-full mt-4">
              Error! The Location is required!
            </p>

            <div className="flex justify-end mt-4">
              <button className="text-white text-semi-bold md:text-lg text-base bg-primary rounded-md md:py-2 md:px-8 px-6 py-1 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

export default Settings;
