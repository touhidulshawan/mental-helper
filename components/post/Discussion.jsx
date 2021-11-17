import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

const Discussion = ({ getID, postID }) => {
  const [commentText, setCommentText] = useState("");
  const router = useRouter();
  const { currentUser } = useAuth();
  const { uid, displayName } = currentUser;
  console.log(postID);
  useEffect(async () => {
    const docRef = doc(db, "posts", uid);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
  });

  // submit comment
  const submitComment = async (evt) => {
    evt.preventDefault();
    // logic goes here
    setCommentText("");
    router.reload();
  };

  return (
    <form onSubmit={submitComment}>
      <textarea
        name="discussionBox"
        id="discussionBox"
        cols="30"
        rows="10"
        maxLength="2000"
        placeholder="Write your opinion here....."
        className="w-full p-4 h-36 bg-bluegray-600 border-2 border-bluegray-600 rounded-lg resize-none focus:outline-sky tracking-wider leading-7 break-words"
        value={commentText}
        onChange={(evt) => setCommentText(evt.target.value)}
        onFocus={() => getID()}
      ></textarea>
      <button
        className="bg-purple-800 text-purple-200 py-3 px-6 mt-3 border-b-8 border-fuchsia-500 rounded-lg uppercase text-sm tracking-wider font-righteous text-center hover:border-yellow-400 transition-all duration-500 focus:outline-sky"
        type="submit"
      >
        Comment Now
      </button>
    </form>
  );
};
export default Discussion;
