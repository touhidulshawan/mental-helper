import Link from "next/link";
import Image from "next/image";
import SignInIcon from "../images/SignInIcon";
import SigninIcon from "../images/SignInIcon";
import HomeIcon from "../images/HomeIcon";

const NavBar = () => {
  return (
    <nav className="h-16 flex justify-between items-center py-3 px-8 shadow-md border-b-2 border-bluegray-700 bg-bluegray-900 ">
      <div className="w-16 h-16 relative ">
        <Link href="/">
          <a>
            <Image
              alt="logo"
              src="/images/logo.svg"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              className="transform scale-150"
            />
          </a>
        </Link>
      </div>
      <ul className="flex items-center gap-5">
        <li>
          <Link href="/">
            <a className="uppercase text-sm tracking-wider  font-bold focus:outline-sky p-2 flex gap-3 justify-center items-center text-bluegray-300 hover:text-bluegray-200 transition-all duration-300 hover:bg-bluegray-800 py-5 px-4 text-center">
              <HomeIcon />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/signin">
            <a className="flex justify-center items-center gap-3 uppercase  text-sm tracking-wider font-bold focus:outline-sky p-2 text-bluegray-300 hover:text-bluegray-200 transition-all duration-300 hover:bg-bluegray-800 py-5 px-4 text-center">
              <SigninIcon />
              <span> Login</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
