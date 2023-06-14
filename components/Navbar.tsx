import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

function Navbar() {
  return (
    <header className="w-full z-10 fixed drop-shadow-md bg-red-100">
      <nav className="w-max-[1440px] flex justify-between mx-auto items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          containerStyle="text-primary-blue bg-white rounded-full min-w-[130px]"
          btnType="button"
        />
      </nav>
    </header>
  );
}

export default Navbar;
