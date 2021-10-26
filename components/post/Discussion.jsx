const Discussion = () => {
  return (
    <form>
      <textarea
        name="discussionBox"
        id="discussionBox"
        cols="30"
        rows="10"
        maxLength="2000"
        placeholder="Write your opinion here....."
        className="w-full p-4 h-36 bg-bluegray-600 border-2 border-bluegray-600 rounded-lg resize-none focus:outline-sky tracking-wider leading-7 break-words"
      ></textarea>
      <button
        className="bg-purple-800 text-purple-200 py-3 px-6 mt-3 border-b-8 border-fuchsia-500 rounded-lg uppercase text-sm tracking-wider font-righteous text-center hover:border-yellow-400 transition-all duration-500 focus:outline-sky"
        type="submit"
      >
        Comment Now
      </button>
    </form>
  );
};
export default Discussion;
