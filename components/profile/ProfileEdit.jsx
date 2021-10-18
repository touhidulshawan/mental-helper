const ProfileEdit = () => {
  return (
    <form>
      <input type="text" name="name" id="name" value="John Smith" />
      <input type="text" name="bio" id="bio" placeholder="Edit your bio" />
      <label htmlFor="userImage">Upload Image</label>
      <input type="file" name="userImage" id="userImage" />
      <button type="submit">Save Changes</button>
    </form>
  );
};
export default ProfileEdit;
