"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "react-bootstrap-icons";
import MobileHeader from "./HeaderMobile";
import Search from "./Search";

const EventDetails = () => {
  return (
    <main className="flex justify-center bg-background px-4">
      <div className="lg:w-[550px] w-[350px] mb-24">
        {/* Fixed Section */}
        <div className="bg-background pb-4 fixed lg:w-[550px] w-[350px] sm:pt-8 pt-2 sm:block hidden">
          <Search />
        </div>

        {/* Posts */}
        <div className="text-white lg:mt-28 sm:mt-24 mt-24 duration-500">
          <div className="">
            <p className="text-sm">SATURDAY DECEMBER 10, 2024</p>
            <p className="lg:text-2xl text-xl font-bold">Chicago Raw Beef Festival</p>
            <p className="text-base text-gray">Millenium Park</p>
            <Image
              className="mt-2"
              src="/fest.jpg"
              alt="festival"
              width="640"
              height="360"
            />

            {/* Hosted By / Interested */}
            <div className="flex justify-between mt-4">
              {/* Bottom - Left */}
              <div className="flex">
                <div className="rounded-full overflow-hidden h-[40px] w-[40px] self-center ">
                  <Image
                    className=""
                    src="/profileImage.jpg"
                    alt="profile"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="ml-2 self-center">
                  <p className="text-gray text-sm">Hosted by:</p>
                  <p className="font-semibold lg:text-lg text-sm ">
                    Chicago Beef Foundation
                  </p>
                </div>
              </div>

              {/* Bottom - Right */}
              <div className="">
                <div className="flex justify-end ">
                  <p className="md:text-base text-sm text-right self-center mr-2">
                    Interested
                  </p>
                  <button>
                    <Star color="white" size={20} className="self-center" />
                  </button>
                </div>
                <p className="text-gray md:text-sm text-xs">4,034 Interested</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <p className="text-white text-base font-bold">DESCRIPTION</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet
                turpis tincidunt, gravida sapien nec, porta sapien. In lacinia magna ut
                lorem pretium, ut eleifend neque convallis. Donec vitae enim in est
                sodales tempus vel sed turpis.
              </p>
            </div>

            {/* Location*/}
            <div className="mt-6">
              <p className="text-white text-base font-bold">LOCATION</p>
              <p className="text-sm">Millenium Park</p>
            </div>

            {/* Address */}
            <div className="mt-6">
              <p className="text-white text-base font-bold">ADDRESS</p>
              <p className="text-sm">201 E. Randolph St. Chicago, IL</p>
            </div>

            {/* Time */}
            <div className="mt-6">
              <p className="text-white text-base font-bold">TIME</p>
              <p className="text-sm">11am - 12pm</p>
            </div>

            {/* Free */}
            <div className="mt-6">
              <p className="text-white text-base font-bold">PRICE</p>
              <p className="text-sm">Free!</p>
            </div>

            {/* Tickets */}
            <div className="mt-6">
              <p className="text-white text-base font-bold">TICKETS</p>
              <Link href="http://google.com">http://google.com</Link>
            </div>

            {/* Tags*/}
            <div className="mt-6">
              <p className="text-white text-base font-bold">TAGS</p>
              <p>festivals, outdoors, food</p>
              {/* <Link href="">tag</Link> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventDetails;
