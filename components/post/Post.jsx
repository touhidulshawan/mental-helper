import PostCard from "./PostCard";
import Discussion from "./Discussion";

const Post = () => {
  return (
    <div>
      <PostCard />
      {/* discussion panel */}
      <div>
        <h4>Give your opinion</h4>
        <Discussion />
        <PostCard />
      </div>
    </div>
  );
};
export default Post;
