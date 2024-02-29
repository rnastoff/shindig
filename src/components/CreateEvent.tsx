"use client";

import { useState } from "react";
import { CloudUpload } from "react-bootstrap-icons";
import CreateCalendar from "@/components/CreateCalendar";
import "@/css/datepicker.css";
import CreateTimeDropdown from "./CreateTimeDropdown";

export const dynamic = "force-dynamic";

const CreateEvent = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleStartDate = (e: any) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("uhm");
  };

  return (
    <section className="flex justify-center bg-background px-4">
      <form className="lg:w-[550px] w-[350px] mt-8 mb-20" onSubmit={handleSubmit}>
        {/* Fixed Section */}
        <h1 className="text-white text-2xl font-bold">Create Event</h1>
        <div className="border-b-[1px] border-primary mt-2"></div>

        {/* Name of Event */}
        <div className="mt-8">
          <label className="text-white text-base font-semibold" htmlFor="name">
            Name of Event
            <span className="text-gray text-xs font-normal ml-4">Required</span>
          </label>
          <input
            className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
            type="text"
            id="name"
            name="name"
          />
        </div>

        {/* Description */}
        <div className="mt-8">
          <label className="text-white text-base font-semibold" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full h-32 text-base resize-none border-[1px] border-primary rounded-sm bg-background outline-none text-white p-1 mt-1"
            id="description"
            name="description"
          />
        </div>

        {/* File */}
        <div className="w-full mt-8">
          <p className="text-white text-base font-semibold">Upload Image</p>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-[1px] border-primary  rounded-sm cursor-pointer bg-bg-background dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mt-1"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <CloudUpload className="text-xl" size="50" color="#ffffff" />

              <p className="mb-2 text-sm text-white">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-white">PNG or JPG</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        {/* Calendar and dropdowns */}
        <div className="flex justify-between ">
          <div className="">
            <CreateCalendar />
            <CreateCalendar />
          </div>

          <div className="">
            <CreateTimeDropdown />
            <CreateTimeDropdown />
          </div>
        </div>

        {/* Location */}
        <div className="mt-8">
          <label className="text-white text-base font-semibold" htmlFor="location">
            Location
            <span className="text-gray text-xs font-normal ml-4">Required</span>
          </label>
          <input
            className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
            type="text"
            id="location"
            name="location"
          />
        </div>

        {/* Price */}
        <div className="mt-8">
          <label className="text-white text-base font-semibold" htmlFor="price">
            Price
            {/* <span className="text-gray text-xs font-normal ml-4">Required</span> */}
          </label>
          <input
            className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
            type="text"
            id="price"
            name="price"
          />
        </div>

        {/* External Link */}
        <div className="mt-8">
          <label className="text-white text-base font-semibold" htmlFor="externalLink">
            External Link
            {/* <span className="text-gray text-xs font-normal ml-4">Required</span> */}
          </label>
          <input
            className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
            type="text"
            id="externalLink"
            name="externalLink"
          />
        </div>

        {/* Tags */}
        <div className="mt-8">
          <label className="text-white text-base font-semibold" htmlFor="tags">
            Tags
            <span className="text-gray text-xs font-normal ml-4">
              separated by commas
            </span>
          </label>
          <input
            className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
            type="text"
            id="tags"
            name="tags"
          />
        </div>

        <p className="text-green text-center w-full mt-4">
          Error! The Location is required!
        </p>

        <div className="flex justify-end mt-4">
          <button className="text-white text-semi-bold sm:text-lg text-base bg-primary rounded-md sm:py-2 px-8 py-1 ">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateEvent;
