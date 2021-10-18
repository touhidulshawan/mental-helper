import Layout from "../components/Layout";
import SigninImage from "../components/images/SigninImage";
const SignIn = () => {
  return (
    <Layout>
      <div>
        <SigninImage />
        <form>
          <h2>Please Sign In</h2>
          <div>
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Your Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
