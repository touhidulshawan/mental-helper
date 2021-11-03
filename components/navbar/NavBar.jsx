import Link from "next/link";
import Image from "next/image";
import SignInIcon from "../images/SignInIcon";
import SigninIcon from "../images/SignInIcon";
import HomeIcon from "../images/HomeIcon";
import UserIcon from "../images/UserIcon";
import { useAuth } from "../../context/AuthContext";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  return (
    <nav className=" flex justify-between items-center   shadow-md border-b-2 border-bluegray-800 bg-bluegray-900 px-8 ">
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
          {currentUser ? (
            <Link href="/feed">
              <a className="uppercase text-sm tracking-wider  font-bold focus:outline-sky p-1 flex gap-3 justify-center items-center text-bluegray-300  text-center">
                <HomeIcon />
                <span>Feed</span>
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a className="uppercase text-sm tracking-wider  font-bold focus:outline-sky p-1 flex gap-3 justify-center items-center text-bluegray-300  text-center">
                <HomeIcon />
                <span>Home</span>
              </a>
            </Link>
          )}
        </li>
        {currentUser && (
          <li>
            <Link href="/profile">
              <a className="flex justify-center items-center gap-3 uppercase  text-sm tracking-wider font-bold focus:outline-sky p-1 text-bluegray-300 text-center">
                <UserIcon />
                <span>Profile</span>
              </a>
            </Link>
          </li>
        )}
        <li>
          {currentUser ? (
            <Link href="/">
              <a className="flex justify-center items-center gap-3 uppercase  text-sm tracking-wider font-bold focus:outline-sky p-1 text-bluegray-300 text-center">
                <SignInIcon />
                <span onClick={logout}>Logout</span>
              </a>
            </Link>
          ) : (
            <Link href="/signin">
              <a className="flex justify-center items-center gap-3 uppercase  text-sm tracking-wider font-bold focus:outline-sky p-1 text-bluegray-300 text-center">
                <SigninIcon />
                <span>Login</span>
              </a>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
