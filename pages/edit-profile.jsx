import Layout from "../components/Layout";
import ProfileEditForm from "../components/profile/ProfileEdit";
import { withProtected } from "../utils/routes";

const EditProfile = () => {
  return (
    <Layout>
      <ProfileEditForm />
    </Layout>
  );
};
export default withProtected(EditProfile);
