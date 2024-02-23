import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

const MobileHeader = () => {
  return (
    <Link href="/" className="block sm:hidden">
      <div className="border-b-[1px] border-primary p-4 text-center">
        <h1 className={`${pacifico.className} sm:hidden block text-primary text-[30px]`}>
          Shindig
        </h1>
      </div>
    </Link>
  );
};

export default MobileHeader;
