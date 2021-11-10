import PostCard from "./PostCard";
import Discussion from "./Discussion";

const Post = (props) => {
  return (
    <div className=" rounded-xl w-6/12 shadow-xl mb-2">
      <PostCard {...props} />
      {/* discussion panel */}
      <div className=" bg-bluegray-900">
        <div className="p-5">
          <h4 className="mb-2 text-bluegray-500 capitalize">
            Give your opinion
          </h4>
          <Discussion />
        </div>
        {props.comments && props.comments.length !== 0 ? (
          <PostCard />
        ) : (
          <p className="py-3 text-center block bg-red-800 text-red-100 tracking-widest">
            No comments found
          </p>
        )}
      </div>
    </div>
  );
};
export default Post;
