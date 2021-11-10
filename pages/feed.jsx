import Layout from "../components/Layout";
import Post from "../components/post/Post";
import PostBox from "../components/post/PostBox";
import { withProtected } from "../utils/routes";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useEffect, useState } from "react";

const Feed = ({ auth, allPosts }) => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    let allPosts = [];
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        allPosts.push(data);
      });
    }
    setPosts(allPosts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { currentUser } = auth;

  console.log(posts);

  return (
    <Layout>
      <div className="grid">
        <div className="mb-6 ">
          <PostBox
            currentUser={currentUser}
            isVerifiedUser={currentUser.emailVerified}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-fuchsia-600 via-pink-500 to-red-500 py-4 ">
          {posts.length === 0 ? (
            <h1>No Post Found</h1>
          ) : (
            posts.map((post) => <Post key={post.id} {...post} />)
          )}
        </div>
      </div>
    </Layout>
  );
};

export default withProtected(Feed);
