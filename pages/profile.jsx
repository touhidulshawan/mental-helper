import Layout from "../components/Layout";
import UserProfile from "../components/profile/UserProfile";
import { withProtected } from "../utils/routes";

const Profile = ({ auth }) => {
  return (
    <Layout>
      <UserProfile {...auth} />
    </Layout>
  );
};
export default withProtected(Profile);
