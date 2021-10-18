import Layout from "../components/Layout";
import SignupImage from "../components/images/SignupImage";

const SignUp = () => {
  return (
    <Layout>
      <div>
        <SignupImage />
        <form>
          <h2>Create an Account</h2>
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="personName" id="name" />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input type="email" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="userpassword" id="userpassword" />
          </div>
          <div>
            <label htmlFor="againpassword">Confirm Password</label>
            <input
              type="password"
              name="againuserpassword"
              id="againuserpassword"
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
