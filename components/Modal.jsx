import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "../schema/FormSchema";
import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ isOpen, handleModal }) => {
  const { resetPassword } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const submitEmail = async (data) => {
    const res = await resetPassword(data);
    if (res) {
      toast.success("Please check your inbox for further step", {
        duration: 1500,
      });
    } else {
      toast.error("Something wrong! Please try again.", { duration: 1500 });
    }
  };

  return (
    <div className={`${isOpen ? "" : "hidden"}`}>
      <div className="bg-bluegray-700 w-full min-h-screen fixed top-0 left-0 inset-0 bg-opacity-50"></div>
      <div className="fixed min-h-screen top-0 left-0 flex items-center w-full">
        <form
          className="bg-bluegray-200 text-bluegray-800 w-96 mx-auto p-10 rounded-2xl shadow-2xl relative"
          onSubmit={handleSubmit(submitEmail)}
        >
          <div className="flex flex-col w-full gap-5">
            <label
              htmlFor="email"
              className=" font-righteous capitalize tracking-wider"
            >
              Enter your email address
            </label>
            <input
              {...register("email")}
              type="email"
              className="py-2 px-3 focus:ring-2 ring-offset-4 ring-teal-700 focus:outline-none transition-all duration-300 ease-in-out rounded-md bg-bluegray-200 text-bluegray-800 border-2 border-bluegray-500 focus:border-transparent"
            />
            <small className="text-red-500 p-1">{errors.email?.message}</small>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full ">
            <button
              type="submit"
              className="bg-fuchsia-700 text-fuchsia-200 py-2 px-4 text-lg mt-6 rounded-lg hover:bg-fuchsia-900 hover:text-fuchsia-100 transition-all duration-300 focus:ring-2 ring-offset-4 ring-fuchsia-700"
            >
              Reset Email
            </button>
            <button
              className="bg-red-600  text-red-200 py-2 px-4 text-lg mt-6 rounded-lg hover:bg-red-800 hover:text-red-100 transition-all duration-300 focus:ring-2 ring-offset-4 ring-red-700"
              onClick={handleModal}
            >
              Cancel
            </button>
          </div>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Modal;
