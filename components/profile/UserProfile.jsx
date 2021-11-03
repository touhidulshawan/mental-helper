import Image from "next/image";
import Link from "next/link";
import EditIcon from "../images/EditIcon";
import PostCard from "../post/PostCard";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../utils/firebase";

const UserProfile = () => {
  const [bio, setBio] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const getBio = ref(database, "bio/" + currentUser.uid);
    onValue(getBio, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setBio(data.bio);
    });
  }, [currentUser.uid]);

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 mx-auto min-h-screen p-1 pb-8">
      <div className="bg-fuchsia-200 text-fuchsia-900 my-10 p-5 text-center max-w-2xl mx-auto rounded-lg  border-4 border-fuchsia-700">
        <h2 className="text-4xl uppercase tracking-wide my-3">
          {currentUser.displayName}
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
      <div className="max-w-3xl mx-auto">
        <PostCard />
      </div>
    </div>
  );
};

export default UserProfile;
