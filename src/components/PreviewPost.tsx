import Link from "next/link";
import Image from "next/image";
import { Star } from "react-bootstrap-icons";

const PreviewPost = () => {
  return (
    <div className="mt-8">
      <p className="text-sm">SATURDAY DECEMBER 10, 2024</p>
      <p className="lg:text-2xl text-xl font-bold">Chicago Raw Beef Festival</p>
      <p className="text-base text-gray">Millenium Park</p>
      <Image className="mt-2" src="/fest.jpg" alt="festival" width="640" height="360" />

      {/* Post - Whole Bottom Section */}
      <div className="flex justify-between mt-4">
        {/* Left Side */}
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
            <p className="font-semibold lg:text-lg text-sm ">Chicago Beef Foundation</p>
          </div>
        </div>

        {/* Right side */}
        <div className="">
          <div className="flex justify-end ">
            <p className="md:text-base text-sm text-right self-center mr-2">Interested</p>
            <button>
              <Star color="white" size={20} className="self-center" />
            </button>
          </div>
          <p className="text-gray md:text-sm text-xs">4,034 Interested</p>
        </div>
      </div>

      <Link className="text-center" href={`post/${"some slug"}`}>
        <p className="text-gray text-sm hover:text-white duration-500 mt-4">
          See Details
        </p>
      </Link>

      <div className="border-b-[1px] border-primary mt-4"></div>
    </div>
  );
};

export default PreviewPost;
