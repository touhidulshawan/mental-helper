import Layout from "../components/Layout";
import SigninImage from "../components/images/SigninImage";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema/FormSchema";
import { useState } from "react";
import Modal from "../components/Modal";
import { withPublic } from "../utils/routes";

const SignIn = ({ auth }) => {
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { login } = auth;

  const submitForm = async (data) => {
    const message = await login(data);
    setError(message);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Layout>
      <div className="grid grid-cols-2 gap-10  items-center">
        <div className="rounded-md">
          <SigninImage />
        </div>
        <form
          className="bg-bluegray-800 text-bluegray-200 w-8/12 p-8 shadow-lg rounded-lg border-2 border-bluegray-700 justify-self-center"
          onSubmit={handleSubmit(submitForm)}
        >
          <h2 className="text-center text-4xl tracking-widest mb-8 capitalize border-b border-bluegray-600 pb-5 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-yellow-200 bg-pink-600 font-righteous ">
            Please Sign In
          </h2>
          {error && (
            <div className="bg-red-700 text-red-200 py-2 px-1 my-2 rounded-md">
              {error}
            </div>
          )}
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="email" className="text-sm text-bluegray-400">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="my-3 py-2 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent"
              {...register("email")}
            />
            <small className="text-red-500 p-1">{errors.email?.message}</small>
          </div>
          <div className="flex flex-col items-start justify-center">
            <label htmlFor="password" className="text-sm text-bluegray-400">
              Your Password
            </label>
            <input
              type="password"
              id="password"
              className="my-3 py-2 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent"
              {...register("password")}
            />
            <small className="text-red-500 py-1">
              {errors.password?.message}
            </small>
          </div>

          <small
            className="text-red-400 cursor-pointer mb-2  block p-1"
            onClick={() => setOpenModal(true)}
          >
            Forgot Password?
          </small>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-fuchsia-700 text-fuchsia-200 py-2 px-8 text-lg leading-relaxed text-center uppercase tracking-wider shadow-xl rounded-md my-2 hover:bg-teal-700 hover:text-teal-200 transition-all duration-300 focus:outline-sky"
            >
              Sign In
            </button>
            <small className="text-sm tracking-wider text-teal-400">
              <Link href="/signup">
                <a className="text-yellow-300 uppercase focus:outline-sky p-2">
                  Create an account
                </a>
              </Link>
            </small>
          </div>
        </form>
      </div>
      {openModal ? (
        <Modal isOpen={openModal} handleModal={toggleModal} />
      ) : null}
    </Layout>
  );
};

export default withPublic(SignIn);
