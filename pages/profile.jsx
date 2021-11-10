import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import UserProfile from "../components/profile/UserProfile";
import { withProtected } from "../utils/routes";
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";
import { db } from "../utils/firebase";

const Profile = ({ auth }) => {
  const { currentUser } = auth;
  const uid = currentUser.uid;
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "posts"),
        orderBy("createdTime", "desc"),
        limit(50)
      );
      const querySnapshot = await getDocs(q);
      let allPosts = [];
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          allPosts.push(data);
        });
      }
      const filteredData = allPosts.filter((post) => post.uid === uid);
      setUserPosts(filteredData);
    };
    fetchData();
  }, [uid]);
  return (
    <Layout>
      <UserProfile posts={userPosts} {...auth} />
    </Layout>
  );
};
export default withProtected(Profile);
