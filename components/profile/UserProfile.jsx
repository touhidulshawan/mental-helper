import Image from "next/image";
import Link from "next/link";
import PostCard from "../post/PostCard";

const UserProfile = () => {
  return (
    <div>
      <div>
        <Image
          src="/images/undraw_biking_kc4f.svg"
          alt="Profile Image"
          width="100"
          height="100"
        />
      </div>
      <div>
        <h2>John Smith</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div>
          <Link href="/edit-profile">
            <a>Edit Profile</a>
          </Link>
        </div>
      </div>
      <div>
        <PostCard />
      </div>
    </div>
  );
};

export default UserProfile;
