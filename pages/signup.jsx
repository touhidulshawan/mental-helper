import { useEffect } from "react";
import Layout from "../components/Layout";
import SignupImage from "../components/images/SignupImage";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../schema/FormSchema";
import { withPublic } from "../utils/routes";

const SignUp = ({ auth }) => {
  const { signup } = auth;

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const submitForm = (data) => {
    signup(data);
  };

  useEffect(() => {
    const defaultValues = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    if (isSubmitSuccessful) {
      reset({ defaultValues });
    }
  }, [isSubmitSuccessful, reset]);

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
          <form className="w-12/12" onSubmit={handleSubmit(submitForm)}>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col items-start justify-center">
                <label
                  htmlFor="firstName"
                  className="text-sm text-bluegray-400"
                >
                  First Name
                </label>
                <input
                  className="my-3 py-2 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent"
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                />
                <small className="text-red-500 py-1">
                  {errors.firstName?.message}
                </small>
              </div>
              <div className="flex flex-col items-start justify-center">
                <label htmlFor="lastName" className="text-sm text-bluegray-400">
                  Last Name
                </label>
                <input
                  className="my-3 py-2 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent"
                  type="text"
                  {...register("lastName")}
                  id="lastName"
                />
                <small className="text-red-500 py-1">
                  {errors.lastName?.message}
                </small>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="email" className="text-sm text-bluegray-400">
                Your Email
              </label>
              <input
                className="my-3 py-2 px-3 block bg-bluegray-800 border-2 border-bluegray-700 rounded-sm w-full focus:outline-sky focus:border-transparent"
                {...register("email")}
                id="email"
              />
              <small className="text-red-500 py-1">
                {errors.email?.message}
              </small>
            </div>
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="password" className="text-sm text-bluegray-400">
                Password
              </label>
              <input
                className="my-3 py-2 px-3 block bg-bluegray-800 border-2 border-bluegray-700 rounded-sm w-full focus:outline-sky focus:border-transparent"
                type="password"
                id="password"
                {...register("password")}
              />
              <small className="text-red-500 py-1">
                {errors.password?.message}
              </small>
            </div>
            <div className="flex flex-col items-start justify-center">
              <label
                htmlFor="confirmPassword"
                className="text-sm text-bluegray-400"
              >
                Confirm Password
              </label>
              <input
                className="my-3 py-2 px-3 block bg-bluegray-800 border-2 border-bluegray-700 rounded-sm w-full focus:outline-sky focus:border-transparent"
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
              />
              <small className="text-red-500 py-1">
                {errors.confirmPassword && "Password should match!"}
              </small>
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

export default withPublic(SignUp);
