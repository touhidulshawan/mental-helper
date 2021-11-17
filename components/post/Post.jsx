import PostCard from "./PostCard";
import Discussion from "./Discussion";
import { useState } from "react";

const Post = (props) => {
  const [getCurrentID, setCurrentID] = useState(null);
  const getID = (id) => {
    setCurrentID(id);
  };
  return props.posts.map((post) => (
    <div
      key={post.id}
      className=" bg-bluegray-800  w-6/12 shadow-xl mb-2 rounded"
    >
      <PostCard {...post} />
      {/* discussion panel */}
      <div className=" bg-bluegray-900">
        <div className="p-5">
          <h4 className="mb-2 text-bluegray-500 capitalize">
            Give your opinion
          </h4>
          <Discussion getID={() => getID(post.id)} postID={getCurrentID} />
        </div>
        {post.comments && post.comments.length !== 0 ? (
          <PostCard />
        ) : (
          <p className="py-3 text-center block bg-bluegray-600 text-bluegray-100 tracking-widest">
            No comments found
          </p>
        )}
      </div>
    </div>
  ));
};
export default Post;
