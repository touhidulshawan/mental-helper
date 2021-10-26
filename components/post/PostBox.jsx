const PostBox = () => {
  return (
    <form className="flex flex-col p-3 justify-center items-start mt-8 w-8/12 m-auto gap-3">
      <textarea
        name="postContent"
        id="postContent"
        cols="45"
        rows="20"
        placeholder="Write your story here...."
        required
        className="bg-bluegray-800 text-bluegray-200 tracking-wide leading-7 w-full h-72 resize-none break-words p-2 border-2 border-blue-300 rounded-lg focus:outline-sky focus:border-transparent"
      ></textarea>
      <button
        type="submit"
        className="bg-teal-800 text-lg py-3 px-8   rounded-lg tracking-wider text-teal-200 shadow-md border-b-8 border-fuchsia-500  focus:outline-sky"
      >
        Post Now
      </button>
    </form>
  );
};
export default PostBox;
