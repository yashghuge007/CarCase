import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex flex-wrap justify-between sm:px-16 px-6 py-10 gap-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />

          <p className="text-base text-gray-700">
            CarCase 2023
            <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="flex items-start gap-10">
          {footerLinks.map((link) => (
            <div className=" flex flex-col items-start justify-between gap-3" key={link.title}>
              <h3 className="font-bold">{link.title}</h3>
              <div className="flex flex-col gap-2">
                {link.links.map((item) => (
                  <Link key={item.title} href={item.url}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 gap-5">
        <p className="max-sm:mt-4">@2023 CarCase. All Rights Reserved.</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
