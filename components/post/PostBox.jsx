import { useState } from "react";
import { db } from "../../utils/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Toaster } from "react-hot-toast";
import ClickToVerify from "../ClickToVerify";
import { v4 as uuidv4 } from "uuid";

const PostBox = ({ currentUser, isVerifiedUser }) => {
  const [postText, setPostText] = useState();

  const { uid, displayName } = currentUser;

  // submit the post

  const submitPost = async (evt) => {
    evt.preventDefault();
    await addDoc(collection(db, "posts"), {
      id: uuidv4(),
      post: postText,
      createdTime: serverTimestamp(),
      postTime: new Date().toDateString(),
      uid,
      displayName,
    });
    setPostText("");
  };

  return (
    <form
      className="flex flex-col p-3 justify-center items-start mt-8 w-8/12 m-auto gap-3"
      onSubmit={submitPost}
    >
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
        onChange={(evt) => setPostText(evt.target.value)}
        className="bg-bluegray-800 text-bluegray-200 tracking-wide leading-7 w-full h-72 resize-none break-words p-2 border-2 border-blue-300 rounded-lg focus:outline-sky focus:border-transparent"
      ></textarea>
      <button
        type="submit"
        disabled={!isVerifiedUser}
        className="bg-teal-800 text-lg py-3 px-8   rounded-lg tracking-wider text-teal-200 shadow-md border-b-8 border-fuchsia-500  focus:outline-sky"
      >
        Post Now
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
};
export default PostBox;
