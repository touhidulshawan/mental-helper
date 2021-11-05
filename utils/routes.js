import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import Loading from "../components/Loading";

export function withPublic(Component) {
  return function WithPublic(props) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.currentUser) {
      router.replace("/feed");
      return <Loading />;
    }
    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component) {
  return function WithProtected(props) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.currentUser) {
      router.replace("/signin");
      return <Loading />;
    }
    return <Component auth={auth} {...props} />;
  };
}
