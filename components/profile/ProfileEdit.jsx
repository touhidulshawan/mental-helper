import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../../schema/FormSchema";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const ProfileEdit = () => {
  const { currentUser, updateUserProfile } = useAuth();
  const fullname = currentUser.displayName;
  const name = fullname.split(" ");

  const [firstName, setFirstName] = useState(name[0]);
  const [lastName, setLastName] = useState(name[1]);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProfileSchema, editPasswordSchema),
  });

  const updateProfileForm = async (data) => {
    const res = await updateUserProfile(data);
    if (res === true) {
      toast.success("Profile Updated", { duration: 1000 });

      setTimeout(() => {
        router.push("/profile");
      }, 1500);
    } else {
      toast.error("No Profile changes!!", { duration: 1000 });
      setTimeout(() => {
        router.push("/profile");
      }, 1500);
    }
  };

  return (
    <div className="max-w-lg mx-auto grid gap-4">
      <form onSubmit={handleSubmit(updateProfileForm)}>
        <header className="my-4 py-2">
          <h2 className="text-2xl text-teal-500 capitalize tracking-wider">
            update user profile
          </h2>
        </header>
        <div>
          <input
            type="text"
            {...register("firstName")}
            placeholder="First Name"
            className="my-3 py-3 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent"
            value={firstName}
            onChange={(evt) => setFirstName(evt.target.value)}
          />
          <small className="text-red-500 py-1">
            {errors.firstName?.message}
          </small>
        </div>
        <div>
          <input
            type="text"
            {...register("lastName")}
            placeholder="Last Name"
            className="my-3 py-3 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent"
            value={lastName}
            onChange={(evt) => setLastName(evt.target.value)}
          />
          <small className="text-red-500 py-1">
            {errors.lastName?.message}
          </small>
        </div>
        <div>
          <textarea
            cols="30"
            rows="2"
            placeholder="Write something about you....."
            className="my-3 py-3 px-3 block w-full bg-bluegray-800 border-2 border-bluegray-700 rounded-sm focus:outline-sky focus:border-transparent resize-none"
            {...register("bio")}
          ></textarea>
          <small className="text-red-500 py-1">{errors.bio?.message}</small>
        </div>

        <button
          type="submit"
          className="bg-fuchsia-700 text-fuchsia-200 py-2 px-8 text-lg leading-relaxed text-center uppercase tracking-wider shadow-xl rounded-md my-2 hover:bg-teal-700 hover:text-teal-200 transition-all duration-300 focus:outline-sky"
        >
          Update Profile
        </button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </div>
  );
};
export default ProfileEdit;
