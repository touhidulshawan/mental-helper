const PostCard = ({ post, uid, displayName, postTime }) => {
  return (
    <div className="bg-bluegray-800 w-full justify-self-center shadow-lg border-2 border-bluegray-700 ">
      <div>
        <div className="flex items-center gap-5 p-4 border-b-2 border-bluegray-700">
          <div>
            <h5 className="font-righteous text-lg tracking-wider text-bluegray-300">
              {displayName}
            </h5>
            <small className="text-bluegray-400">Posted on: {postTime}</small>
          </div>
        </div>

        <p className="p-5 text-justify text-bluegray-200 leading-7 tracking-wide">
          {post}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
