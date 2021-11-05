import Layout from "../components/Layout";
import Post from "../components/post/Post";
import PostBox from "../components/post/PostBox";
import { withProtected } from "../utils/routes";

const Feed = () => {
  return (
    <Layout>
      <div className="grid">
        <div className="mb-6 ">
          <PostBox />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-fuchsia-600 via-pink-500 to-red-500 py-4 ">
          <Post />
          <Post />
        </div>
      </div>
    </Layout>
  );
};

export default withProtected(Feed);
