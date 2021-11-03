import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../schema/FormSchema";
import { useAuth } from "../../context/AuthContext";

const ProfileEdit = () => {
  const { currentUser, updateUserPassword } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProfileSchema),
  });

  const submitForm = (data) => {
    updateUserPassword(data);
  };

  return (
    <div className="max-w-lg mx-auto">
      <header className="my-4 py-2">
        <h2 className="text-2xl text-teal-500 capitalize tracking-wider">
          Change Account Password
        </h2>
      </header>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter new password"
            className="my-3 py-3 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent"
          />

          <small className="text-red-500 py-1">
            {errors.password?.message}
          </small>
        </div>
        <div>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm new password"
            className="my-3 py-3 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent"
          />

          <small className="text-red-500 py-1">
            {errors.confirmPassword?.message}
          </small>
        </div>
        <button
          type="submit"
          className="bg-fuchsia-700 text-fuchsia-200 py-2 px-8 text-lg leading-relaxed text-center uppercase tracking-wider shadow-xl rounded-md my-2 hover:bg-teal-700 hover:text-teal-200 transition-all duration-300 focus:outline-sky"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
export default ProfileEdit;
