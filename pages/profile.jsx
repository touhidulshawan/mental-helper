import Layout from "../components/Layout";
import UserProfile from "../components/profile/UserProfile";
import { withProtected } from "../utils/routes";

const Profile = () => {
  return (
    <Layout>
      <UserProfile />
    </Layout>
  );
};
export default withProtected(Profile);
