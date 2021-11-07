import { Toaster } from "react-hot-toast";
import ClickToVerify from "../ClickToVerify";

const PostBox = ({ isVerifiedUser }) => {
  return (
    <form className="flex flex-col p-3 justify-center items-start mt-8 w-8/12 m-auto gap-3">
      {isVerifiedUser ? null : (
        <div className="flex justify-center items-center bg-red-200 text-red-600 m-auto p-2 rounded-md border-2 border-red-600">
          <p className="text-center">
            Not Verified. Please
            <span>
              <ClickToVerify />
            </span>
            your email first to write posts.
          </p>
        </div>
      )}
      <textarea
        name="postContent"
        id="postContent"
        cols="45"
        rows="20"
        placeholder="Write your story here...."
        required
        disabled={!isVerifiedUser}
        className="bg-bluegray-800 text-bluegray-200 tracking-wide leading-7 w-full h-72 resize-none break-words p-2 border-2 border-blue-300 rounded-lg focus:outline-sky focus:border-transparent"
      ></textarea>
      <button
        type="submit"
        className="bg-teal-800 text-lg py-3 px-8   rounded-lg tracking-wider text-teal-200 shadow-md border-b-8 border-fuchsia-500  focus:outline-sky"
      >
        Post Now
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
};
export default PostBox;
