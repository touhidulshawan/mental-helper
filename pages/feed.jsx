import Layout from "../components/Layout";
import Post from "../components/post/Post";
import PostBox from "../components/post/PostBox";

const Feed = () => {
  return (
    <Layout>
      <div>
        <PostBox />
        <Post />
      </div>
    </Layout>
  );
};

export default Feed;
