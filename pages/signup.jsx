import Layout from "../components/Layout";
import SignupImage from "../components/images/SignupImage";
import Link from "next/link";

const SignUp = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="p-10  rounded-lg">
          <SignupImage />
        </div>
        <div className="bg-bluegray-800 text-bluegray-200 w-9/12 p-8 shadow-lg rounded-lg border-2 border-bluegray-700 justify-self-center">
          <h2 className="text-center text-4xl tracking-widest mb-8 capitalize border-b border-bluegray-600 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-yellow-200 bg-pink-600 font-righteous ">
            Create an Account
          </h2>
          <form className="w-12/12">
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="name" className="text-sm text-bluegray-400">
                Your Name
              </label>
              <input
                className="my-3 py-2 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent"
                type="text"
                name="personName"
                id="name"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="email" className="text-sm text-bluegray-400">
                Your Email
              </label>
              <input
                className="my-3 py-2 px-3 block bg-bluegray-800 border-2 border-bluegray-700 rounded-sm w-full focus:outline-sky focus:border-transparent"
                type="email"
                name="username"
                id="username"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="password" className="text-sm text-bluegray-400">
                Password
              </label>
              <input
                className="my-3 py-2 px-3 block bg-bluegray-800 border-2 border-bluegray-700 rounded-sm w-full focus:outline-sky focus:border-transparent"
                type="password"
                name="userpassword"
                id="userpassword"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <label
                htmlFor="againpassword"
                className="text-sm text-bluegray-400"
              >
                Confirm Password
              </label>
              <input
                className="my-3 py-2 px-3 block bg-bluegray-800 border-2 border-bluegray-700 rounded-sm w-full focus:outline-sky focus:border-transparent"
                type="password"
                name="againuserpassword"
                id="againuserpassword"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                className="bg-fuchsia-700 text-fuchsia-200 py-2 px-8 text-lg leading-relaxed text-center uppercase tracking-wider shadow-xl rounded-md my-2 hover:bg-teal-700 hover:text-teal-200 transition-all duration-300 focus:outline-sky"
                type="submit"
              >
                Sign Up
              </button>

              <small className="text-sm tracking-wider text-teal-400">
                Already Have Account?{" "}
                <Link href="/signin">
                  <a className="text-yellow-300 p-2 uppercase focus:outline-sky">
                    Sign In
                  </a>
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
