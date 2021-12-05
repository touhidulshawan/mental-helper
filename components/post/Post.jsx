import PostCard from "./PostCard";
import Discussion from "./Discussion";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Post = (props) => {
  const [getCurrentID, setCurrentID] = useState(null);
  const getID = (id) => {
    setCurrentID(id);
  };
  return props.posts.map((post) => (
    <div key={post.id} className=" bg-bluegray-800  w-6/12 shadow-2xl  mb-2">
      <PostCard {...post} />
      {/* discussion panel */}
      <div className=" bg-bluegray-900">
        <div className="p-5">
          <h4 className="mb-2 text-bluegray-500 capitalize">
            Give your opinion
          </h4>
          <Discussion
            posts={props.posts}
            getID={() => getID(post.id)}
            postID={getCurrentID}
          />
        </div>
        {post.comments && post.comments.length !== 0 ? (
          <div className="p-4 grid gap-3 bg-bluegray-700">
            <h2 className="text-center font-righteous tracking-widest text-bluegray-300">
              All Comments
            </h2>
            {post.comments.map((comment) => (
              <PostCard key={uuidv4()} {...comment} />
            ))}
          </div>
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
