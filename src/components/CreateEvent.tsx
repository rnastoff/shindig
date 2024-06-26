"use client";
import { useEffect } from "react";
import { CloudUpload } from "react-bootstrap-icons";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EventSchema } from "@/lib/validation/Event";

import CreateDatepicker from "@/components/datepicker/CreateDatepicker";
import CreateTimePicker from "./CreateTimePicker";

export const dynamic = "force-dynamic";

type FormData = z.infer<typeof EventSchema>;

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(EventSchema),
  });

  const submitData = (data: FormData) => {
    console.log("here are the values:", getValues());
  };

  const displayErrorMessage = (error: any) => {
    return <p className="text-green text-sm text-center w-full mt-2">{error}</p>;
  };

  useEffect(() => {
    console.log("ERRORS: ", errors);
  });

  return (
    <section className="flex justify-center bg-background px-4">
      <form
        className="lg:w-[550px] w-[350px] sm:mt-8 mt-24 mb-20"
        onSubmit={handleSubmit(submitData)}
      >
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
            type="text"
            id="name"
            className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
            {...register("name")}
          />
          {errors.name && displayErrorMessage(errors.name.message)}
        </div>

        {/* Description */}
        <div className="mt-8">
          <label className="text-white text-base font-semibold" htmlFor="description">
            Description
            <span className="text-gray text-xs font-normal ml-4">Required</span>
          </label>
          <textarea
            className="w-full h-32 text-base resize-none border-[1px] border-primary rounded-sm bg-background outline-none text-white p-1 mt-1"
            id="description"
            // name="description"
            {...register("description")}
          />
          {errors.description && displayErrorMessage(errors.description.message)}
        </div>

        {/* File */}
        <div className="w-full mt-8">
          <p className="text-white text-base font-semibold">Upload Image</p>
          <label
            htmlFor="image"
            className="flex flex-col items-center justify-center w-full h-64 border-[1px] border-primary  rounded-sm cursor-pointer bg-bg-background dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mt-1"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <CloudUpload className="text-xl" size="50" color="#ffffff" />

              <p className="mb-2 text-sm text-white">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-white">PNG or JPG</p>
            </div>
            <input type="file" id="image" className="hidden" {...register("imageFile")} />
          </label>
          {errors.imageFile && displayErrorMessage(errors.imageFile.message)}
        </div>

        {/* Calendar and dropdowns */}
        <div>
          <div className="md:flex justify-between ">
            <CreateDatepicker register={register} control={control} />
            <CreateTimePicker register={register} control={control} />
          </div>
          {(errors.date || errors.time) &&
            displayErrorMessage("Enter valid date and time")}
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
            // name="location"
            {...register("location")}
          />
          {errors.location && displayErrorMessage(errors.location.message)}
        </div>

        {/* Price */}
        <div className="mt-8">
          <label className="text-white text-base font-semibold" htmlFor="price">
            Price
          </label>
          <input
            className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
            type="text"
            id="price"
            {...register("price")}
          />
        </div>

        {/* External Link */}
        <div className="mt-8">
          <label className="text-white text-base font-semibold" htmlFor="externalLink">
            External Link
          </label>
          <input
            className="w-full border-[1px] border-primary bg-background rounded-sm outline-none text-white p-1 mt-1"
            type="text"
            id="externalLink"
            {...register("externalLink")}
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
            {...register("tags")}
          />
        </div>

        <div className="flex justify-end mt-6">
          <button className="text-white text-semi-bold sm:text-lg text-base bg-primary rounded-md sm:py-2 px-8 py-1 ">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateEvent;

// <div className="md:flex justify-between ">
//             <CreateDatepicker
//               dateError={errors.date?.message}
//               register={register}
//               control={control}
//             />
//             <CreateTimeDropdown timeError={errors.time?.message} register={register} />
//           </div>
//           {errors.date ? displayErrorMessage("Please select a valid date") : ""}
