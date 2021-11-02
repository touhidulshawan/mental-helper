import { useState } from "react";
import Layout from "../components/Layout";
import SignupImage from "../components/images/SignupImage";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (password !== confirmPassword) {
      return setError("Password does not match");
    }
    try {
      signup(email, password);
    } catch (error) {
      console.log(error);
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Layout title="Sign Up">
      <div className="grid grid-cols-2 gap-5  p-6 md:mt-8">
        <div className="p-10  rounded-lg">
          <SignupImage />
        </div>
        <div className="bg-bluegray-800 text-bluegray-200 w-10/12 p-8 shadow-lg rounded-lg border-2 border-bluegray-700 justify-self-center">
          <h2 className="text-center text-4xl tracking-widest mb-8 capitalize border-b border-bluegray-600 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-yellow-200 bg-pink-600 font-righteous ">
            Create an Account
          </h2>
          <form className="w-12/12" onSubmit={handleSubmit}>
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="name" className="text-sm text-bluegray-400">
                Your Name
              </label>
              <input
                className="my-3 py-2 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent"
                type="text"
                name="personName"
                id="name"
                value={name}
                onChange={(evt) => setName(evt.target.value)}
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
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
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
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
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
                value={confirmPassword}
                onChange={(evt) => setConfirmPassword(evt.target.value)}
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                className="bg-fuchsia-700 text-fuchsia-200 py-2 px-8 text-lg leading-relaxed text-center uppercase tracking-wider shadow-xl rounded-md my-2 hover:bg-teal-700 hover:text-teal-200 transition-all duration-300 focus:outline-sky"
                type="submit"
              >
                Sign Up
              </button>

              <small className="text-sm tracking-wider text-teal-400 ">
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
