import Link from "next/link";
import EditIcon from "../images/EditIcon";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../utils/firebase";
import VerifiedIcon from "../images/verifiedIcon";
import ClickToVerify from "../ClickToVerify";
import { Toaster } from "react-hot-toast";
import Post from "../post/Post";

const UserProfile = ({ currentUser, posts }) => {
  const [bio, setBio] = useState(null);
  useEffect(() => {
    const getBio = ref(database, "bio/" + currentUser.uid);
    onValue(getBio, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setBio(data.bio);
      }
    });
  });

  return (
    <div className="bg-bluegray-800 mx-auto min-h-screen pt-4">
      <div className="bg-fuchsia-200 text-fuchsia-900 my-10 p-5 text-center max-w-2xl mx-auto rounded-lg  border-4 border-fuchsia-700">
        <h2 className="text-4xl uppercase tracking-wide my-3">
          {currentUser.displayName}
          <small className="text-sm block lowercase my-2 text-purple-600 font-righteous">
            {currentUser.emailVerified ? (
              <div className="flex justify-center items-center gap-1">
                <span>Verified</span>
                <VerifiedIcon />
              </div>
            ) : (
              <span>
                Not Verified <ClickToVerify />
              </span>
            )}
          </small>
        </h2>
        {bio ? (
          <p className="my-3">{bio}</p>
        ) : (
          <small className="text-gray-500 text-base my-2 block">
            No Bio Found!!
          </small>
        )}
        <div>
          <Link href="/edit-profile">
            <a className="flex justify-center items-center gap-2">
              <EditIcon />
              <span>Edit Profile</span>
            </a>
          </Link>
        </div>
      </div>
      <div className=" bg-gray-100 p-5  mx-auto flex flex-col justify-center items-center gap-5  ">
        {posts.length !== 0 ? (
          <Post posts={posts} />
        ) : (
          <h1 className=" p-2 text-center text-red-600">No Post Found</h1>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default UserProfile;
