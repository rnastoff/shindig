import Image from "next/image";

import Wrapper from "@/components/Wrapper";
import PreviewPost from "@/components/PreviewPost";

const Profile = () => {
  return (
    <Wrapper>
      <section className="flex justify-center bg-background px-4">
        <div className="lg:w-[550px] w-[350px] sm:mt-8 mt-24 mb-20">
          {/* Profile Heading */}
          <div className="flex justify-between">
            <div className="flex">
              <div className="rounded-full overflow-hidden h-[56px] w-[56px] self-center ">
                <Image
                  className=""
                  src="/profileImage.jpg"
                  alt="profile"
                  width="200"
                  height="200"
                />
              </div>
              <p className="text-white font-bold lg:text-3xl md:text-lg self-center ml-4">
                Bob Bobberson
              </p>
            </div>
          </div>
          {/* <div className="border-b-[1px] border-primary mt-2"></div> */}

          {/* Events hosted by you */}
          <div className="mt-8">
            <h1 className="text-white text-xl font-semibold">Hosted Events</h1>
            <div className="border-b-[1px] border-primary mt-2"></div>
            <div>
              <PreviewPost />
            </div>
          </div>

          {/* Interested Events */}
          <div className="mt-24">
            <h1 className="text-white text-xl font-semibold">Interested Events</h1>
            <div className="border-b-[1px] border-primary mt-2"></div>
            <div>
              <PreviewPost />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Profile;
