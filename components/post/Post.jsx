import PostCard from "./PostCard";
import Discussion from "./Discussion";

const Post = () => {
  return (
    <div className=" rounded-xl w-6/12 shadow-xl mb-2">
      <PostCard />
      {/* discussion panel */}
      <div className=" bg-bluegray-900">
        <div className="p-5">
          <h4 className="mb-2 text-bluegray-500 capitalize">
            Give your opinion
          </h4>
          <Discussion />
        </div>
        <PostCard />
      </div>
    </div>
  );
};
export default Post;
