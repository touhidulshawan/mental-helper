const PostBox = () => {
  return (
    <form>
      <textarea
        name="postContent"
        id="postContent"
        cols="45"
        rows="20"
      ></textarea>
      <button type="submit">Post Now</button>
    </form>
  );
};
export default PostBox;
