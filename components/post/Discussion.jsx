import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import {
  query,
  where,
  updateDoc,
  getDocs,
  collection,
  arrayUnion,
  doc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

const Discussion = ({ getID, postID, posts }) => {
  const [commentText, setCommentText] = useState("");
  const router = useRouter();
  const { currentUser } = useAuth();
  const { uid, displayName, emailVerified } = currentUser;
  // submit comment
  const submitComment = async (evt) => {
    evt.preventDefault();
    const commentObj = {
      uid,
      displayName,
      post: commentText,
      id: postID,
      postTime: new Date().toDateString(),
    };
    // fetch data with postID
    const q = query(collection(db, "posts"), where("id", "==", postID));
    const querySnapshot = await getDocs(q);
    let docId;
    querySnapshot.forEach((doc) => {
      docId = doc.id;
    });
    const commentRef = doc(db, "posts", docId);
    await updateDoc(commentRef, {
      comments: arrayUnion(commentObj),
    });
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
        disabled={!emailVerified}
        placeholder="Write your opinion here....."
        className="w-full p-4 h-36 bg-bluegray-600 border-2 border-bluegray-600 rounded-lg resize-none focus:outline-sky tracking-wider leading-7 break-words"
        value={commentText}
        onChange={(evt) => setCommentText(evt.target.value)}
        onFocus={() => getID()}
      ></textarea>
      <button
        className={`${
          emailVerified
            ? "bg-purple-800 text-purple-200 border-fuchsia-500"
            : "cursor-not-allowed bg-red-200 text-red-600 border-red-500"
        } py-3 px-6 mt-3 border-b-8  rounded-lg uppercase text-sm tracking-wider font-righteous text-center hover:border-yellow-400 transition-all duration-500 focus:outline-sky`}
        type="submit"
        disabled={!emailVerified}
      >
        Comment Now
      </button>
    </form>
  );
};
export default Discussion;
